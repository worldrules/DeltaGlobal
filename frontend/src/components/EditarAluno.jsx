// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import defaultAvatar from '../assets/default-avatar.jpg';

const EditarAluno = () => {
    const [imagem, setImagem] = useState(null);
    const { id } = useParams();
    const navigateTo = useNavigate();

    const [formData, setFormData] = useState({
        nome: '',
        sobrenome: '',
        idade: '',
        email: '',
        endereco: '',
        nome_pai: '',
        nome_mae: ''
    });

    useEffect(() => {
        const getAluno = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/alunos/${id}`);
                const aluno = response.data;
                setFormData({
                    nome: aluno.nome,
                    sobrenome: aluno.sobrenome,
                    idade: aluno.idade,
                    email: aluno.email,
                    endereco: aluno.endereco,
                    nome_pai: aluno.nome_pai,
                    nome_mae: aluno.nome_mae
                });
            } catch (error) {
                console.error('Erro ao obter dados do aluno:', error);
            }
        };

        getAluno();
    }, [id]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`http://localhost:8080/alunos/${id}`, formData);
            console.log('Aluno atualizado com sucesso');
            navigateTo('/');
        } catch (error) {
            console.error('Erro ao atualizar aluno:', error);
        }
    };

    return (
        <div className="container">
            <h2 className="title">Editar Aluno</h2>
            <form onSubmit={handleSubmit}>
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
                        <input
                            className="input"
                            type="text"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Sobrenome</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            name="sobrenome"
                            value={formData.sobrenome}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Idade</label>
                    <div className="control">
                        <input
                            className="input"
                            type="number"
                            name="idade"
                            value={formData.idade}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input
                            className="input"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Endereço</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            name="endereco"
                            value={formData.endereco}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Nome do Pai</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            name="nome_pai"
                            value={formData.nome_pai}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Nome da Mãe</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            name="nome_mae"
                            value={formData.nome_mae}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="field is-grouped">
                    <div className="control">
                        <button type="submit" className="button is-primary">Atualizar</button>
                    </div>
                    <div className="control">
                        <Link to="/" className="button is-link">Voltar</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default EditarAluno;
