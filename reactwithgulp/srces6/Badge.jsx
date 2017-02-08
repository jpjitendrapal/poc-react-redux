//1. Create a class
import React from 'react'
export default class Badge extends React.Component {

    constructor(){
        super();
        this.state = {count: 4};
    }
    
    
    componentWillMount(){
            this.state.count = this.props.count;
    }
    
    /*getInitialState(){
        return {
            count: this.props.count
        }
    }*/

    incrementCount(){
        var newcount = this.state.count + 1;
        this.setState({count: newcount})
    }

    render(){
        return (
        <button onClick={this.incrementCount}  class="btn btn-primary" type="button">
          Add {this.props.text} <span class="badge">{this.state.count}</span>
        </button>
        )
    }
}



//2. Create an instance
//var obj = React.createElement(Badge, {text:"Inbox", count: 44})

//3. Render
//ReactDOM.render(obj, document.getElementById('mount-point'))