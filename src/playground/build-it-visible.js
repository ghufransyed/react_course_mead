class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);

        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

        this.state = {
            visible: false
        };
    };

    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                visible: (! prevState.visible)
            }
        });
    };

    render() {
        return (
            <div>
                <h1>Visibility Toggle build-it</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visible ?
                    "Hide Details" :
                    "Show Details"
                }</button>
                <div>{this.state.visible && "Here are some details!!!"}</div>
            </div>

        );
    }
}


ReactDOM.render(<VisibilityToggle />,
    document.getElementById("app"));



























/*

//<h1>Visibility Toggle!!!</h1>

let showDetail = false;


const toggleDetails = () => {
    showDetail = ! showDetail;
    render();
}



const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleDetails}>{showDetail ?
                "Hide Details" :
                "Show Details"}</button>
            {showDetail && <p>Here are some details!</p>}

        </div>
    )
    ReactDOM.render(template, appRoot);
}

render();*/
