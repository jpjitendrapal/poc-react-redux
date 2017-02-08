import React from "react";
import Article from "../components/Article";

export default class Settings extends React.Component {
  render() {
    return (
      <div class="container">
		<div class="row">
			<h2>Settings Page</h2>
			<Article />
			<Article />
			<Article />
		</div>
      </div>
    );
  }
}
