import React from "react";
import * as TodoActions from "../actions/TodoActions";
import ReactDOM from "react-dom";

export default class Todo extends React.Component {
  constructor(props) {
    super();
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  deleteTodo(){
    TodoActions.deleteTodo(this.props.key1);
    // ReactDOM.unmountComponentAtNode(this);
  }

  render() {
    const { complete, edit, text } = this.props;

    const icon = complete ? "\u2714" : "\u2716"

    if (edit) {
      return (
        <li>
          <input value={text} focus="focused"/>
        </li>
      );
    }

    return (
      <li>
        <span>{text}</span>
        <span>{icon}</span>
        <button class="delete" value="" onClick={this.deleteTodo} >Delete</button>
      </li>
    );
  }
}
