var CommentBox = React.createClass({
    
        
        render: function () {
            return (
                    <div className="commentBox">
                        Hi {this.props.message}!!
                    </div>
            )
        }
    });


//var obj = React.createElement(CommentBox, {message:"ReactJS"});

ReactDOM.render(<CommentBox message="Markup"></CommentBox>, document.getElementById('mount-point'));

