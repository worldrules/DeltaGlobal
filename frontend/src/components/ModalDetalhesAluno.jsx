// eslint-disable-next-line no-unused-vars
import React from 'react';
import Modal from 'react-modal';
import { DetalhesAluno } from './DetalhesAluno';

Modal.setAppElement('#root'); // Define o elemento raiz da aplicação para acessibilidade

const ModalDetalhesAluno = ({ aluno, isOpen, onRequestClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Detalhes do Aluno"
        >
            <button onClick={onRequestClose}>Fechar</button>
            <DetalhesAluno aluno={aluno} />
        </Modal>
    );
}

export default ModalDetalhesAluno;
