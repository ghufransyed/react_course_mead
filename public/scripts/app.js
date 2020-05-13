'use strict';

console.log('App.js is running!');

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'This is my new header!'
    ),
    React.createElement(
        'p',
        null,
        'This is my new body text!'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'This is my first item'
        ),
        React.createElement(
            'li',
            null,
            'Second Item!!!'
        ),
        React.createElement(
            'li',
            null,
            'Third Item!!!'
        )
    )
);

var appRoot = document.getElementById('app');

//ReactDOM.render(template, appRoot)
ReactDOM.render(template2, appRoot);
//# sourceMappingURL=app.js.map