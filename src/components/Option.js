import React from "react";

const Option = (props) => {
    return (

        <div
            className='option'
            id={'option-' + props.id }
        >
            {props.option}
            <button
                id={ 'btn-' + props.id }
                className='option-remove-btn'
                onClick={
                    (e) => props.handleRemoveOption(props.option)
                }
            >
                Remove
            </button>
        </div>
    )
}

export { Option as default };