// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import defaultAvatar from '../assets/default-avatar.jpg';
import ModalDetalhesAluno from './ModalDetalhesAluno';
import AlertMessage from './AlertMessage';


const ListaAlunos = () => {
    const [alunos, setAlunos] = useState([]);
    const [alunoSelecionado, setAlunoSelecionado] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [showDeleteMessage, setShowDeleteMessage] = useState(false);

    useEffect(() => {
        getAlunos();
    }, []);

    const getAlunos = async () => {
        try {
            const response = await axios.get('http://localhost:8080/alunos');
            setAlunos(response.data);
            console.log(alunos)

        } catch (error) {
            console.error('Erro ao obter alunos:', error);
        }
    }

    const handleAlunoClick = (aluno) => {
        setAlunoSelecionado(aluno);
        setModalIsOpen(true);
    }

    const handleDeleteAluno = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/alunos/${id}`);
            setAlunos(alunos.filter(aluno => aluno.id !== id));
            setShowDeleteMessage(true);
            setTimeout(() => {
                setShowDeleteMessage(false);
            }, 3000);
        } catch (error) {
            console.error('Erro ao deletar aluno:', error);
        }
    }

    return (
        <div>
            <h2 className="title">Lista de Alunos</h2>
            {showDeleteMessage && <AlertMessage message="Aluno excluído com sucesso" type="buttondel" />}

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
                                <img src={defaultAvatar} onClick={() => handleAlunoClick(aluno)} alt="Foto do Aluno" className="aluno-avatar-lista" />
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
            <Link to="/adicionar-aluno" className="buttonadd button is-success">Adicionar um novo aluno</Link>
        </div>
    );
}

export default ListaAlunos;
