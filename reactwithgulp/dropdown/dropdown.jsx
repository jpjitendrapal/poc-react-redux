import React from 'react'
import Button from './button'
export default class Dropdown extends React.Component{

    constructor(){
        super();
        this.state = {show: false}
    }
    
    toggleShow(){
        
        console.log('ToggleShow');
        let newshow = !this.state.show
        this.setState({show: newshow})
       
    }
    
    render(){
        return (
            <div class="dropdown">
            <Button whenClick={this.toggleShow.bind(this)}></Button>
            
            <ul class={(this.state.show)?'dropdown-menushow':'dropdown-menu' } aria-labelledby="dropdownMenu1">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a></li>
            </ul>
            </div>
        )
    }
}