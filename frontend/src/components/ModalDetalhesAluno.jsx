// eslint-disable-next-line no-unused-vars
import React from 'react';
import Modal from 'react-modal';
import DetalhesAluno from './DetalhesAluno';
import PropTypes from 'prop-types';


Modal.setAppElement('#root');

const ModalDetalhesAluno = ({ aluno, isOpen, onRequestClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Detalhes do Aluno"
        >
            <DetalhesAluno onRequestClose={onRequestClose} aluno={aluno} />
        </Modal>
    );
}
ModalDetalhesAluno.propTypes = {
    aluno: PropTypes.object,
    isOpen: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func
};

export default ModalDetalhesAluno;
