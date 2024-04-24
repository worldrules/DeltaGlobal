/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListaAlunos = () => {
    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
        getAlunos();
    }, []);

    const getAlunos = async () => {
        const alunos = await axios.get('http://localhost:8080/alunos');
        setAlunos(alunos.data);
        console.log(alunos)
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
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Leo</td>
                        <td>teste</td>
                        <td>teste</td>
                        <td>teste</td>
                        <td>teste</td>
                        <td>teste do Pai</td>
                        <td>teste da Mãe</td>
                        <td>
                            <button className='button is-small is-info'>Editar</button>
                            <button className='button is-small is-danger'>Deletar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ListaAlunos;
