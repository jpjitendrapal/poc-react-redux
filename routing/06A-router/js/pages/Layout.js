import React from "react";
import { Link } from "react-router";

import { browserHistory } from 'react-router';


export default class Layout extends React.Component {
	constructor(){
		super();
	}
    navigate(){
        console.log(this.props.children);
        // browserHistory.replace('/');
        browserHistory.push('/');
    }
    updateData(){
      
    }
  render() {
    return (
      <div>
          <h1>My WebSite</h1>
        <button onClick={this.navigate.bind(this)} class="btn btn-info btn-lg">Featured</button>
        <Link to="archives"  class="btn btn-primary btn-lg">Archives</Link>
        <Link to="settings"><button class="btn btn-success btn-lg">Settings</button></Link>
          {this.props.children}
      </div>

    );
  }
}
