import {Option} from "./Option";
import React from "react";

export const Options = (props) => {
    return (
        <div>
            <button
                onClick={props.handleDeleteOptions}
                disabled={!props.hasOptions}
            >
                Remove All
            </button>

            {props.options.length === 0 &&
            <p>Please add an option to get started!</p>}

            {props.options.map((option, i) => {
                return (
                    <Option
                        option={option}
                        key={i}
                        handleRemoveOption={props.handleRemoveOption}
                    />
                )
            })}
        </div>
    );
}