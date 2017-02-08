//1. Create a class

var Badge = React.createClass({
    displayName: "Badge",


    render: function () {
        return React.createElement(
            "button",
            { className: "btn btn-primary", type: "button" },
            this.props.text,
            " ",
            React.createElement(
                "span",
                { className: "badge" },
                this.props.count
            )
        );
    }
});

//2. Create an instance
var obj = React.createElement(Badge, { text: "Inbox", count: 44 });

//3. Render
ReactDOM.render(obj, document.getElementById('mount-point'));
