"use strict";

//<h1>Visibility Toggle!!!</h1>

var showDetail = false;

var toggleDetails = function toggleDetails() {
    showDetail = !showDetail;
    render();
};

var appRoot = document.getElementById('app');

var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visibility Toggle"
        ),
        React.createElement(
            "button",
            { onClick: toggleDetails },
            showDetail ? "Hide Details" : "Show Details"
        ),
        showDetail && React.createElement(
            "p",
            null,
            "Here are some details!"
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
//# sourceMappingURL=build-it-visible.js.map