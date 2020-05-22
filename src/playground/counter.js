

class Counter extends React.Component{

    render() {
        return (
            <div>
                <h1>Count: </h1>
                <span>
                <button id="buttonPlus"
                        className="button">+1</button>
                <button id="buttonMinus"
                        className="button">-1</button>
                <button id="buttonReset"
                        className="button">Reset</button>
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
