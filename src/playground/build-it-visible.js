
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

render();