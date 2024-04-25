// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
                        <th>Foto</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {alunos.map((aluno, index) => (
                        <tr key={index} onClick={() => handleAlunoClick(aluno)}>
                            <td>{aluno.nome}</td>
                            <td>{aluno.sobrenome}</td>
                            <td>{aluno.idade}</td>
                            <td>{aluno.email}</td>
                            <td>{aluno.endereco}</td>
                            <td>{aluno.nome_pai}</td>
                            <td>{aluno.nome_mae}</td>
                            <td>
                                <input type="file" onChange={(e) => handleFileUpload(e, aluno.id)} />
                            </td>
                            <td>
                                <button className='button is-small is-info' style={{ marginRight: '5px' }}>Editar</button>
                                <button className='button is-small is-danger'>Deletar</button>
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
        </div>
    );
}

export default ListaAlunos;
