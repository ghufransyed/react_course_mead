import React from 'react';
import Modal from 'react-modal';


const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        id='option-modal'
        onRequestClose={props.handleCloseOptionModal}
    >
        <h3>Selected Option</h3>
        {props.selectedOption &&
        <p id='picked-option'>
            {props.selectedOption}
        </p>}
        <button
            id='closeModal'
            onClick={props.handleCloseOptionModal}
        >Okay</button>

    </Modal>
);

export default OptionModal;