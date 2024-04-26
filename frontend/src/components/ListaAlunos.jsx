// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import ModalDetalhesAluno from './ModalDetalhesAluno';



const ListaAlunos = () => {
    const [alunos, setAlunos] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [alunoSelecionado, setAlunoSelecionado] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);



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

    const handleFileUpload = () => {
        // Lógica para fazer upload do arquivo
    }

    const handleAlunoClick = (aluno) => {
        setAlunoSelecionado(aluno);
        setModalIsOpen(true);
    }

    const handleDeleteAluno = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/alunos/${id}`);
            setAlunos(alunos.filter(aluno => aluno.id !== id));
        } catch (error) {
            console.error('Erro ao deletar aluno:', error);
        }
    }

    return (
        <div>
            <h2 className="title">Lista de Alunos</h2>
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
                        <th>Foto</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {alunos.map((aluno, index) => (
                        <tr key={index}>
                            <td onClick={() => handleAlunoClick(aluno)}>{aluno.nome}</td>
                            <td onClick={() => handleAlunoClick(aluno)}>{aluno.sobrenome}</td>
                            <td onClick={() => handleAlunoClick(aluno)}>{aluno.idade}</td>
                            <td onClick={() => handleAlunoClick(aluno)}>{aluno.email}</td>
                            <td onClick={() => handleAlunoClick(aluno)}>{aluno.endereco}</td>
                            <td onClick={() => handleAlunoClick(aluno)}>{aluno.nome_pai}</td>
                            <td onClick={() => handleAlunoClick(aluno)}>{aluno.nome_mae}</td>
                            <td>
                                <input type="file" onChange={(e) => handleFileUpload(e, aluno.id)} />
                            </td>
                            <td className='buttons'>
                                <Link to={`/editar-aluno/${aluno.id}`} className='button is-small is-info'>Editar</Link>
                                <button className='button is-small is-danger' onClick={() => handleDeleteAluno(aluno.id)}>Deletar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ModalDetalhesAluno
                aluno={alunoSelecionado}
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
            />
            <Link to="/adicionar-aluno" className="button is-success">Adicionar um novo aluno</Link>
        </div>
    );
}

export default ListaAlunos;
