// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import defaultAvatar from '../assets/default-avatar.jpg';

const DetalhesAluno = ({ aluno, onRequestClose }) => {
    const [imagem, setImagem] = useState(null);



    const handleImagemChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImagem(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSalvar = async () => {
        try {
            const formData = new FormData();
            formData.append('imagem', imagem);
            formData.append('aluno_id', aluno.id);

            await axios.post('http://localhost:8080/alunos/salvarFoto', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            // Atualizar a lista de alunos ou realizar outras ações necessárias
            console.log('Imagem salva com sucesso!');
        } catch (error) {
            console.error('Erro ao salvar imagem:', error);
        }
        console.log('Imagem salva:', imagem);
    };

    return (
        <div className="container">
            <h2 className="title">Detalhes do Aluno</h2>
            <div className="field">
                <div className="control">
                    <input
                        className="input"
                        type="file"
                        accept="image/*"
                        onChange={handleImagemChange}
                    />
                    {imagem ? (
                        <img src={imagem} alt="Foto do Aluno" className="aluno-avatar" />
                    ) : (
                        <img src={defaultAvatar} alt="Foto do Aluno" className="aluno-avatar" />
                    )}
                </div>
            </div>
            <div className="field">
                <label className="label">Nome</label>
                <div className="control">
                    <input className="input" type="text" value={`${aluno.nome} ${aluno.sobrenome}`} disabled />
                </div>
            </div>
            <div className="field">
                <label className="label">Idade</label>
                <div className="control">
                    <input className="input" type="number" value={aluno.idade} disabled />
                </div>
            </div>
            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input className="input" type="email" value={aluno.email} disabled />
                </div>
            </div>
            <div className="field">
                <label className="label">Endereço</label>
                <div className="control">
                    <input className="input" type="text" value={aluno.endereco} disabled />
                </div>
            </div>
            <div className="field">
                <label className="label">Nome do Pai</label>
                <div className="control">
                    <input className="input" type="text" value={aluno.nome_pai} disabled />
                </div>
            </div>
            <div className="field">
                <label className="label">Nome da Mãe</label>
                <div className="control">
                    <input className="input" type="text" value={aluno.nome_mae} disabled />
                </div>
            </div>
            <div className="field is-grouped is-grouped-centered">
                <div className="control">
                    <button onClick={onRequestClose} className='button is-info'>Voltar</button>
                </div>
                {imagem && (
                    <div className="control">
                        <button onClick={handleSalvar} className="button is-primary">Salvar</button>
                    </div>
                )}
            </div>
        </div >
    );
}

DetalhesAluno.propTypes = {
    aluno: PropTypes.object,
    onRequestClose: PropTypes.func,
};

export default DetalhesAluno;
