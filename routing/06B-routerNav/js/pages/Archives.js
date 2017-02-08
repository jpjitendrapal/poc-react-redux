import React from "react";

import Article from "../components/Article";

export default class Archives extends React.Component {
  render() {
    return (
      <div class="container">
		<div class="row">
			<h2>Archives Page</h2>
			<Article />
		</div>
      </div>
    );
  }
}
