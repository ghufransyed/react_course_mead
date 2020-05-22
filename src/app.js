
const title = "Indecision";
const subtitle = "Put your life in the hands of a computer"
let options = ['Thing One','Thing Two','Thing Three'];

let event = undefined;


class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
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
    handlePick() {
        console.log('handlePick');
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}


class Options extends React.Component {
    handleRemoveAll(){
        console.log('removeAll');
    }
    render() {
        return (

        <div>
            <button onClick={this.handleRemoveAll}>Remove All</button>
            {this.props.options.map((option,i) => {
                return <Option option={option} key={i}   /> ;
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
    handleAddOption(e){
        e.preventDefault();
       let input_val = e.target.elements.addOption.value;

       if (input_val){
           console.log(input_val);
       }
    }
    render() {
        return (
            <div>
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