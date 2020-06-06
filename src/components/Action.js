import React from "react";

const Action = (props) => {
    return (
        <div>
            <button
                id='what-do'
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    )
};

export { Action as default };