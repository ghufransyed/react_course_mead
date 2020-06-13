import Option from "./Option";
import React from "react";

const Options = (props) => (
        <div>
            <div className={"widget-header"}>
                <h3 className={'widget-header__title'}>Your Options</h3>
                <button
                    className={'button button--link'}
                    id='remove-all'
                    onClick={props.handleDeleteOptions}
                    disabled={!props.hasOptions}
                >
                    Remove All
                </button>
            </div>

            {props.options.length === 0 &&
            <p
                className={'widget__message'}
                id='get-started-msg'>Please add an option to get started!</p>}

            {props.options.map((option, i) => {
                return (
                    <Option
                        id={i}
                        count={i+1}
                        option={option}
                        key={i}
                        handleRemoveOption={props.handleRemoveOption}
                    />
                )
            })}
        </div>
    );

export { Options as default };