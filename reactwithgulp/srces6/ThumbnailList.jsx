//1. Create a class

import Thumbnail from './Thumbnail';
import React from 'react'
import axios from 'axios'
export default class ThumbnailList extends React.Component{

    constructor(){
        super();
        this.state = {thumbnails: []}
    }    

    loadData(){

        
        /*axios.get('/dummydb/thumb.json')
        // .then((response) => response.json())
        .then((response) => {
            this.setState({thumbnails: response.data})
        })*/
       
        fetch('/dummydb/thumb.json')
        .then((response) => {
            this.setState({thumbnails: response.data})
        })
    }


    render(){
        
        var list = this.state.thumbnails.map(function(thumbnail, index){
            console.log(thumbnail);
            return <Thumbnail key={index} {...thumbnail}></Thumbnail>
            
        })
        
        return (
            <div>
                <button onClick={this.loadData.bind(this)}>Load Data</button>
                {list}
            </div>
        )
    }
}


