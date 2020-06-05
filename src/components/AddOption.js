import React from "react";

export default class AddOption extends React.Component {

    state = {
        error: undefined
    }

    handleAddOption = (e) => {
        e.preventDefault();
        const newOption = e.target.elements.addOption.value.trim();
        const error = this.props.handleAddOption(newOption);

        this.setState(() => ({error}));

        if (!error) {
            e.target.elements.addOption.value = '';
        }
        ;

    };


    render() {
        return (
            <div>
                {this.state.error && <p
                    id='error-msg-addOption'
                    >{this.state.error}</p>}
                <form
                    onSubmit={this.handleAddOption}
                    id='form-addOption'
                >
                    <input
                       id='input-addOption'
                       type="text"
                       name="addOption"
                       placeholder="Enter option here"></input>
                    <button
                        id='button-addOption'
                        type="submit">Add Option</button>
                </form>
            </div>
        );
    }
}