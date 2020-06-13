import React from "react";

const Option = (props) => (
        <div
            className='option'
            id={'option-' + props.id }>
            <p className={'option__text'}>
                {props.count}. {props.option}
            </p>
            <button
                className='button button--link'
                id={ 'btn-' + props.id }
                //className='option-remove-btn'
                onClick={
                    (e) => props.handleRemoveOption(props.option)
                }
            >
                Remove
            </button>
        </div>
    );

export { Option as default };