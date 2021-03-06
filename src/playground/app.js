class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: props.options
        }
        this.handlePick = this.handlePick.bind(this);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleRemoveOption = this.handleRemoveOption.bind(this);
    }

    handlePick() {
        let pick = Math.floor(Math.random() *
                                this.state.options.length);
        console.log(this.state.options[pick])
    }

    componentDidMount() {
       try {
           const json = localStorage.getItem('options');
           const options = JSON.parse(json);
           if (options) {
               this.setState(() => ({ options }) );
           }
       }  catch(e) {
           // Do nothing
           console.log(e.message);
       }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('saving data');
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    };

    handleRemoveOption(optionToRemove) {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter(
                    (option) =>  option !== optionToRemove
                )

            }
        })
    }

    handleAddOption(newOption) {
        if (!newOption){
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(newOption) > -1){
            return 'This item already exists';
        }

        this.setState( (prevState) => ({
                options: [...prevState.options, newOption]
        }));
    };

    render() {
        const subtitle = "Put your life in the hands of a computer"

        return (
            <div>
                <Header
                    subtitle={subtitle}
                />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
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
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={! props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    )
};

const Options = (props) => {
    return (
        <div>
            <button
                onClick={props.handleDeleteOptions}
                disabled={! props.hasOptions}
            >
                Remove All
            </button>

            {props.options.length === 0 &&
                <p>Please add an option to get started!</p>}

            {props.options.map((option,i) => {
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


const Option = (props) => {
    return (

        <div>
            {props.option}
            <button
                onClick={
                    (e) => props.handleRemoveOption(props.option)
                }
            >
                Remove
            </button>
        </div>
    )
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
        const error = this.props.handleAddOption(newOption);

        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.addOption.value = '';
        };

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



ReactDOM.render(<IndecisionApp/>,
    document.getElementById('app'));