import axios from "axios";
import Dispatcher from "../dispatcher";


export function createTodo(text, completed) {
    console.log("text is", text);
    console.log("done is", completed);
    dispatcher.dispatch({
        type: "CREATE_TODO",
        text,
        completed
    })
}
export function deleteTodo(id) {
    dispatcher.dispatch({
        type: "DELETE_TODO",
        id
    })
}
export function loadTodos() {
/*
    setTimeout(()=>{
            dispatcher.dispatch({type:"RECEIVE_TODOS", todos: [
        {
              id: 21,
              text: "Teach React",
              complete: false
          },
          {
              id: 22,
              text: "Teach Angular",
              complete: true
          },
          {
              id: 23,
              text: "Teach ES6",
              complete: true
          }
    ]})

    },1000);
*/
    
    //Axios is Promise based HTTP client for the browser and node.js
    
//    axios("http://someurl/data").then((data) => {console.log("data fetched!",data);})

    axios({
  method: 'get',
//        data: {username: name},
  url: 'http://localhost:8080/js/server/todo.json',
        headers: {'Access-Control-Allow-Headers': 'origin, content-type, accept',
                 'Access-Control-Allow-Origin':'*'}
})        .then((res) => {
            console.log(typeof res);
            console.log("got the response!",res);
            dispatcher.dispatch({type:"RECEIVE_TODOS", todos: res.data});
        })
        .catch((err) =>{console.log(err)});
/*
    
    axios.get("http://localhost:8080/js/server/todo.json")
        .then((res) => {
            console.log(typeof res);
            console.log("got the response!",res);
            dispatcher.dispatch({type:"RECEIVE_TODOS", todos: res.data});
        })
        .catch((err) =>{console.log(err)});
*/

    
    
}
