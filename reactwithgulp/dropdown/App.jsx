import Dropdown from './dropdown'
import React from 'react'
import ReactDOM from 'react-dom'

var options= {

    
}

//2. Create an instance
var obj = React.createElement(Dropdown, options)

//3. Render
ReactDOM.render(obj, document.getElementById('mount-point'))