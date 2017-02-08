import React from 'react'

export default class Button extends React.Component{
    render(){
        return (
            
            <button onClick={this.handleClick.bind(this)} class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                Dropdown
                <span class="caret"></span>
            </button>
            
        )
    }
    
    handleClick(){
        console.log('handleClick');
        console.dir(this.props)
        this.props.whenClick();
    }
    
    
    
}