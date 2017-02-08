import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter{
    constructor(){
        super();
        this.todos= [
          {
              id: 11,
              text: "Read React",
              complete: false
          },
          {
              id: 12,
              text: "Read Angular",
              complete: true
          },
          {
              id: 13,
              text: "Read ES6",
              complete: false
          }
      ]
        
    }
    
    createTodo(text, completed){
        const id = Date.now();
/*
        this.todos.push({
            id:id,
            text:text,
            complete: completed
        });
*/
        this.todos.push({
            id,
            text,
            completed
        });
        
        this.emit("change");
    }

    deleteToDo(id){
        this.todos.splice(id, 1);
        this.emit("change");
    }
    
    getAllTodos(){
        return this.todos;
    }
    
    handleActions(action){
        console.log("TodoStore received an action", action);
        console.log(action.type);
        switch(action.type){
            case "CREATE_TODO": {
                this.createTodo(action.text, action.complete);
                break;
            }
            case "RECEIVE_TODOS": {
//                this.todos = action.todos;
//                Array.prototype.push.apply(this.todos, action.todos);
                this.todos.push(...action.todos);
                this.emit("change");
                break;
            }
            case "DELETE_TODO": {
                console.log(action.text);
                this.deleteToDo(action.id);
                break;
            }
            default: {
                console.log("Unknown action type/ event type");
            }
        }
    }
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));


window.todoStore = todoStore;
window.dispatcher = dispatcher;

export default todoStore;

//dispatcher.dispatch({type:"some event type"});
//dispatcher.dispatch({type:"CREATE_TODO", text:"Read History", complete: false});