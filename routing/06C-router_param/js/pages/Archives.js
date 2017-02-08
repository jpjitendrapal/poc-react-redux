import React from "react";

import Article from "../components/Article";

export default class Archives extends React.Component {
  render() {
      console.log(this.props);
    return (
      <div>
        <h1>Archives</h1>
        <h3>Article id: {this.props.params.article}</h3>
      </div>
    );
  }
}
