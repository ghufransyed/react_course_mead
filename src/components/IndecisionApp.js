import React from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";
import OptionModal from "./OptionModal";

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    handleCloseOptionModal = () => {
        this.setState(() => ({
            selectedOption: false
        }))
    }

    handlePick = () => {
        let pick = Math.floor(Math.random() *
            this.state.options.length);
        this.setState(() => ({
                selectedOption: this.state.options[pick]
            }))
    }


    handleDeleteOptions = () => {
        this.setState(() => ({options: []}));
    };


    handleRemoveOption = (optionToRemove) => {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter(
                    (option) => option !== optionToRemove
                )

            }
        })
    }


    handleAddOption = (newOption) =>  {
        if (!newOption) {
            return 'Sorry, that is not a valid entry';
        } else if (this.state.options.indexOf(newOption) > -1) {
            return 'This item already exists';
        }

        this.setState((prevState) => ({
            options: [...prevState.options, newOption]
        }));
    };


    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({options}));
            }
        } catch (e) {
            // Do nothing
            console.log(e.message);
        }
    }


    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('saving data');
        }
    }


    componentWillUnmount() {
        console.log('componentWillUnmount');
    }


    render() {
        const subtitle = "Put your life in the hands of a computer"

        return (
            <div>
                <Header
                    subtitle={subtitle}
                />
                <div className='container'>
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className={'widget'}>
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleRemoveOption={this.handleRemoveOption}
                            hasOptions={this.state.options.length > 0}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleCloseOptionModal={this.handleCloseOptionModal}
                />
            </div>
        )
    }
}


export { IndecisionApp as default }