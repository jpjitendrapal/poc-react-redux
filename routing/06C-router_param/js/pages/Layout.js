import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

import { browserHistory } from 'react-router';

export default class Layout extends React.Component {
    constructor(){
        super();
        this.state = {id: 0};
    }
    navigate(){
        console.log(this.props);
        console.log(this.props.history);
        browserHistory.replace('/');
        // this.props.history.pushState(null, "/");
        // this.props.history.replaceState(null, "/");
    }
    
    handleId(event){
        const id = event.target.value;
        if(!isNaN(id) && id>=0){
            this.setState({id});
        } else {
            this.setState({id:0});
        }
        event.target.value = '';
    }
  render() {
    return (
      <div>
          <h1>My WebSite</h1>
        <hr/>
          {this.props.children}<br/>
        <hr/>
        <button onClick={this.navigate.bind(this)} class="btn btn-info">Featured</button><br/>
        <input placeholder="Enter article id" onBlur={this.handleId.bind(this)}/>
        <Link to={"archives/"+this.state.id}  class="btn btn-primary">Archives</Link><br/>
        <Link to="settings"><button class="btn btn-success">Settings</button></Link><br/>
      </div>

    );
  }
}
