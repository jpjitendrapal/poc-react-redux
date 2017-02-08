import React from "react";
import { Link } from "react-router";
import { browserHistory } from 'react-router';

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
	constructor(){
		super();
	}
    navigate(){
        browserHistory.replace('/');
        console.log(this.props.children);
        // this.props.history.pushState(null, "/");
        // this.props.history.replaceState(null, "/");
    }
  render() {
    console.log('layout');
    console.log(this.props);
    return (
      <div>
		<Nav location={this.props.location}/>
		<br/>
		<br/>
          {this.props.children}
		<Footer/>
      </div>

    );
  }
}
