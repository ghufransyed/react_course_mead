


class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           options:   []
        }
        this.handlePick = this.handlePick.bind(this);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
    }

    handlePick() {
        let pick = Math.floor(Math.random() *
                                this.state.options.length);
        console.log(this.state.options[pick])
    }

    handleDeleteOptions() {
       this.setState( () => {
           return {
               options: []
           }
       })
    };

    handleAddOption(newOption) {
        if (!newOption){
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(newOption) > -1){
            return 'This item already exists';
        }

        this.setState( (prevState) => {
            return {
                options: [...prevState.options, newOption]
            }
        });


    };

    render() {
        const title = "Indecision";
        const subtitle = "Put your life in the hands of a computer"

        return (
            <div>
                <Header
                    title={title}
                    subtitle={subtitle}
                />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    hasOptions={this.state.options.length > 0}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}


class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
    );
    }
}

class Action extends React.Component {
    render() {
            return (
                <div>
                    <button
                        onClick={this.props.handlePick}
                        disabled={! this.props.hasOptions}
                    >
                        What should I do?
                    </button>
                </div>
            )
    }
}


class Options extends React.Component {
    render() {
        return (
        <div>
            <button
                onClick={this.props.handleDeleteOptions}
                disabled={! this.props.hasOptions}
            >
                Remove All
            </button>

            {this.props.options.map((option,i) => {
                return <Option option={option} key={i}   />
            })}
        </div>
        );
    }
}


class Option extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.option}</p>
            </div>
        );
    }
}



class AddOption extends React.Component {
    constructor(props){
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
        e.target.elements.addOption.value = '';
        const error = this.props.handleAddOption(newOption);

        this.setState(() => {
            return { error }; // same as return { error: this.error }
        });

    };


    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text"
                           name="addOption"
                           placeholder="Enter option here" ></input>
                    <button type="submit">Add Option</button>
                </form>
        </div>
        );
    }
}





ReactDOM.render(<IndecisionApp />, document.getElementById('app'));