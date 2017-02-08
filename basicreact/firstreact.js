var CommentBox = React.createClass({
    displayName: "CommentBox",


    render: function () {
        return React.createElement(
            "div",
            { className: "commentBox" },
            "Hi ",
            this.props.message,
            "!!"
        );
    }
});

//var obj = React.createElement(CommentBox, {message:"ReactJS"});

ReactDOM.render(React.createElement(CommentBox, { message: "Markup" }), document.getElementById('mount-point'));
