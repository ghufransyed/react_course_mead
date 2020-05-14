'use strict';

console.log('App.js is running!');

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? "Here are your options" : "No options"
    )
);

var counter = 0;

var addOne = function addOne() {
    counter++;
    renderCounterApp();
};
var minusOne = function minusOne() {
    counter--;
    renderCounterApp();
};

var resetCounter = function resetCounter() {
    counter = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Counter ',
            counter
        ),
        React.createElement(
            'span',
            null,
            React.createElement(
                'button',
                { id: 'buttonPlus',
                    className: 'button',
                    onClick: addOne
                },
                '+1'
            ),
            React.createElement(
                'button',
                { id: 'buttonMinus',
                    className: 'button',
                    onClick: minusOne
                },
                '-1'
            ),
            React.createElement(
                'button',
                { id: 'buttonReset',
                    className: 'button',
                    onClick: resetCounter
                },
                'Reset'
            )
        )
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
//# sourceMappingURL=app.js.map