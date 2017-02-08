import React from "react";

import Article from "../components/Article";

export default class Featured extends React.Component {
  render() {
    return (
      <div class="container">
		<div class="row">
			<h2>Featured Page</h2>
			<Article />
			<Article />
		</div>
      </div>
    );
  }
}
