class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.handleAddOne=this.handleAddOne.bind(this);
        this.handleMinusOne=this.handleMinusOne.bind(this);
        this.handleReset=this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    handleAddOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };//
        });
        console.log(this.state.count);
    };

    handleMinusOne(){
        console.log('handleMinusOne');
        this.state.count -= 1;
    };

    handleReset(){
        console.log('handleReset');
        this.state.count = 0;
     };


    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <span>
                <button id="buttonPlus"
                        className="button"
                        onClick={this.handleAddOne}>+1</button>
                <button id="buttonMinus"
                        className="button"
                        onClick={this.handleMinusOne}>-1</button>
                <button id="buttonReset"
                        className="button"
                        onClick={this.handleReset}>Reset</button>
            </span>
            </div>
            )
    };
};


ReactDOM.render(<Counter />, document.getElementById('app'));




//let counter = 0;
//
//const addOne = () => {
//    counter++ ;
//    renderCounterApp();
//}
//const minusOne = () => {
//    counter--;
//    renderCounterApp();
//}
//
//const resetCounter = () => {
//    counter = 0;
//    renderCounterApp();
//}
//
//
//const appRoot = document.getElementById('app');
//
//
//
//const renderCounterApp = () => {
//    const templateTwo = (
//        <div>
//            <h1>Counter {counter}</h1>
//            <span>
//            <button id="buttonPlus"
//                    className="button"
//                    onClick={addOne}
//            >+1</button>
//            <button id="buttonMinus"
//                    className="button"
//                    onClick={minusOne}
//            >-1</button>
//            <button id="buttonReset"
//                    className="button"
//                    onClick={resetCounter}
//            >Reset</button>
//        </span>
//        </div>
//    );
//
//    ReactDOM.render(templateTwo, appRoot);
//}
//
//renderCounterApp();
