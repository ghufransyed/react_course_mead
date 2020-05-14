"use strict";

var templateTwo = React.createElement(
        "div",
        null,
        React.createElement(
                "h1",
                null,
                "Counter ",
                counter
        ),
        React.createElement(
                "span",
                null,
                React.createElement(
                        "button",
                        { id: "buttonPlus",
                                className: "button",
                                onClick: addOne
                        },
                        "+1"
                ),
                React.createElement(
                        "button",
                        { id: "buttonMinus",
                                className: "button",
                                onClick: minusOne
                        },
                        "-1"
                ),
                React.createElement(
                        "button",
                        { id: "buttonReset",
                                className: "button",
                                onClick: resetCounter
                        },
                        "Reset"
                )
        )
);
//# sourceMappingURL=counter.js.map