// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListaAlunos = () => {
    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
        getAlunos();
    }, []);

    const getAlunos = async () => {
        try {
            const alunos = await axios.get('http://localhost:8080/alunos');
            setAlunos(alunos.data);
        } catch (error) {
            console.error('Erro ao obter alunos:', error);
        }
    }

    return (
        <div>
            <h2>Lista de Alunos</h2>
            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Sobrenome</th>
                        <th>Idade</th>
                        <th>Email</th>
                        <th>Endereço</th>
                        <th>Nome do Pai</th>
                        <th>Nome da Mãe</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {alunos.map((aluno, index) => (
                        <tr key={index}>
                            <td>{aluno.nome}</td>
                            <td>{aluno.sobrenome}</td>
                            <td>{aluno.idade}</td>
                            <td>{aluno.email}</td>
                            <td>{aluno.endereco}</td>
                            <td>{aluno.nome_pai}</td>
                            <td>{aluno.nome_mae}</td>
                            <td>
                                <button className='button is-small is-info'>Editar</button>
                                <button className='button is-small is-danger'>Deletar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListaAlunos;
