import ThumbnailList from './ThumbnailList'
import React from 'react'
import ReactDOM from 'react-dom'

var options= {
    
}

//2. Create an instance
var obj = React.createElement(ThumbnailList, options)

//3. Render
ReactDOM.render(obj, document.getElementById('mount-point'))