//1. Create a class

var Badge = React.createClass({
    
    render: function(){
        return (
        <button className="btn btn-primary" type="button">
          {this.props.text} <span className="badge">{this.props.count}</span>
        </button>
        )
    }
})

//2. Create an instance
var obj = React.createElement(Badge, {text:"Inbox", count: 44})

//3. Render
ReactDOM.render(obj, document.getElementById('mount-point'))