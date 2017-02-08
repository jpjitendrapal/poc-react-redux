//1. Create a class

var Badge = React.createClass({
    
    
    getInitialState: function(){
        return {
            count: this.props.count
        }
    },

    incrementCount: function(){
        var newcount = this.state.count + 1;
        this.setState({count: newcount})
    },
    
    
    render: function(){
        return (
        <button onClick={this.incrementCount}  className="btn btn-primary" type="button">
          Add {this.props.text} <span className="badge">{this.state.count}</span>
        </button>
        )
    }
    
    
})

module.exports = Badge

//2. Create an instance
//var obj = React.createElement(Badge, {text:"Inbox", count: 44})

//3. Render
//ReactDOM.render(obj, document.getElementById('mount-point'))