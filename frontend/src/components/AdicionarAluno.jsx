// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para enviar os dados do formulário para o backend
        console.log(formData);
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
        </div>
    );
}

export default AdicionarAluno;
