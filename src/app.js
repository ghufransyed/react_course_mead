console.log('App.js is running!');

var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var template2 = (
    <div>
        <h1>This is my new header!</h1>
        <p>This is my new body text!</p>
        <ol>
            <li>This is my first item</li>
            <li>Second Item!!!</li>
            <li>Third Item!!!</li>
        </ol>
    </div>
);


var appRoot = document.getElementById('app');

//ReactDOM.render(template, appRoot)
ReactDOM.render(template2, appRoot)
