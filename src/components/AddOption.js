import React from "react";

export default class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    };

    handleAddOption(e) {
        //debugger;
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
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text"
                           name="addOption"
                           placeholder="Enter option here"></input>
                    <button type="submit">Add Option</button>
                </form>
            </div>
        );
    }
}