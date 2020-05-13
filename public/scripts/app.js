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
  '  ',
  React.createElement(
    'p',
    null,
    'More stuff'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
//# sourceMappingURL=app.js.map