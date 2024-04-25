// eslint-disable-next-line no-unused-vars
import React from 'react'

export const DetalhesAluno = ({ aluno }) => {
    return (
        <div>
            <h3>Detalhes do Aluno</h3>
            <p><strong>Nome:</strong> {aluno.nome} {aluno.sobrenome}</p>
            <p><strong>Idade:</strong> {aluno.idade}</p>
            <p><strong>Email:</strong> {aluno.email}</p>
            <p><strong>Endereço:</strong> {aluno.endereco}</p>
            <p><strong>Nome do Pai:</strong> {aluno.nome_pai}</p>
            <p><strong>Nome da Mãe:</strong> {aluno.nome_mae}</p>
            <p><strong>Foto:</strong>{aluno.foto && <img src={aluno.foto} alt="Foto do Aluno" />}
            </p>
        </div>
    );
}