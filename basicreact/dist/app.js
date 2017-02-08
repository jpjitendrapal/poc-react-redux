var Badge = React.createClass({displayName: "Badge",
        render: function () {
            return (
                    React.createElement("button", {className: "btn btn-primary", type: "button"}, 
                        this.props.text, " ", React.createElement("span", {className: "badge"}, this.props.count)
                    )
            )
        }
    });

ReactDOM.render(React.createElement(Badge, {text: "Inbox", count: "5"}), document.getElementById('mount-point'));

