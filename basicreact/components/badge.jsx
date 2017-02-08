var Badge = React.createClass({
        render: function () {
            return (
                    <button className="btn btn-primary" type="button">
                        {this.props.text} <span className="badge">{this.props.count}</span>
                    </button>
            )
        }
    });

ReactDOM.render(<Badge text="Inbox" count="7"></Badge>, document.getElementById('mount-point'));

