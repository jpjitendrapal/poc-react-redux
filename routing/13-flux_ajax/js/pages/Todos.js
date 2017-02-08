import React from "react";

import Todo from "../components/Todo";

import TodoStore from "../stores/TodoStore";
import * as TodoActions from "../actions/TodoActions";

export default class Todos extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: TodoStore.getAllTodos()
    };
  }

    componentWillMount(){
        TodoStore.on("change", ()=>{
            this.setState({
                todos: TodoStore.getAllTodos()
            });
        });
    }
    
    createTodo(){
        const newTodo = document.getElementById("newTodo").value;
        TodoActions.createTodo(newTodo, false);
        document.getElementById("newTodo").value = '';
        return false;
    }

    loadTodos(){
        TodoActions.loadTodos();
    }

    
  render() {
    const { todos } = this.state;
    const TodoComponents = todos.map((todo,index) => {
        todo.key1 = index;
        return <Todo key={index} {...todo}/>;
    });

    return (
      <div>
        <button type="button" class="btn btn-info" onClick={this.loadTodos.bind(this)}>Load Todo</button>
        <form onSubmit={this.createTodo.bind(this)}>
        <input id="newTodo" placeholder="Enter todo" required/>

        <button type="submit" class="btn btn-success" >Create Todo</button>
        </form>
        <h1>Todos</h1>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }
}
