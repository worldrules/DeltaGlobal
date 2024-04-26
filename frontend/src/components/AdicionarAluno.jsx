// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './AdicionarAluno.css';


const AdicionarAluno = () => {
    const [formData, setFormData] = useState({
        nome: '',
        sobrenome: '',
        idade: '',
        email: '',
        endereco: '',
        nome_pai: '',
        nome_mae: ''
    });
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleCloseSuccessMessage = () => {
        setShowSuccessMessage(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/alunos', formData);
            console.log('Aluno adicionado com sucesso:', response.data);
            setShowSuccessMessage(true);
        } catch (error) {
            alert('Erro ao adicionar aluno:', error);
        }
    };

    return (
        <div className="container">
            <h2 className="title">Adicionar Aluno</h2>
            <form onSubmit={handleSubmit}>
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
                        <button type="submit" className="button is-primary">Adicionar</button>
                    </div>
                    <div className="control">
                        <Link to="/" className="button is-link">Voltar</Link>
                    </div>
                </div>
            </form>
            {showSuccessMessage && (
                <div className="notification is-success">
                    <Link to="/" onClick={handleCloseSuccessMessage} className="delete is-link"></Link>
                    Aluno adicionado com sucesso!
                </div>
            )}
        </div>
    );
}

export default AdicionarAluno;
