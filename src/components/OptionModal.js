import React from 'react';
import Modal from 'react-modal';


const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        id='option-modal'
        onRequestClose={props.handleCloseOptionModal}
        closeTimeoutMS={200}
        className={'modal'}
    >
        <h3 className={'modal__title'}>Selected Option</h3>
        {props.selectedOption &&
        <p
            id='picked-option'
            className='modal__body'
        >
            {props.selectedOption}
        </p>}
        <button
            className={'button'}
            id='closeModal'
            onClick={props.handleCloseOptionModal}
        >Okay</button>

    </Modal>
);

export default OptionModal;