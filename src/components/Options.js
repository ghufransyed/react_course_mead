import Option from "./Option";
import React from "react";

const Options = (props) => (
        <div>
            <button
                id='remove-all'
                onClick={props.handleDeleteOptions}
                disabled={!props.hasOptions}
            >
                Remove All
            </button>

            {props.options.length === 0 &&
            <p id='get-started-msg'>Please add an option to get started!</p>}

            {props.options.map((option, i) => {
                return (
                    <Option
                        id={i}
                        option={option}
                        key={i}
                        handleRemoveOption={props.handleRemoveOption}
                    />
                )
            })}
        </div>
    );

export { Options as default };