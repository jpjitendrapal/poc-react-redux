var React = require('react');


var Header = require('./header');
var List = require('./list')

var App = React.createClass({
   

    getInitialState: function () {
        return {
            items: [],
            loaded: false
        }
    },
    componentWillMount: function () {
       fetch('http://localhost:9000/todos')
        .then((res)=>res.json())
        .then((data)=> {
            console.log(data)
            this.setState({items: data});

        }) 
    },


    render: function () {
        console.log(this.state)

        return (
            <div className="row panel panel-default">
                <div className="col-md-8 col-md-offset-2">
                    <h2 className="text-center">
                        To-Do List
                    </h2>
                    <Header itemAdd={this.handleItemAdd}/>
                    <hr />
                    <div>
                        <List items={this.state.items} itemDelete={this.handleItemDelete}/>
                    </div>
                   


                     
                </div>
            </div>
        );
    },


    handleItemDelete(index){
        fetch('http://localhost:9000/todos', {
                method: 'delete',
                body: JSON.stringify({index: index}),
                headers: new Headers({
                    "Content-Type": "application/json"
                })
            })
        .then((res)=> {
            console.log(res);
            if(res.status == "200"){
                console.log('200')
                this.forceUpdate();
            }
        })
        /*.then((data)=> {
            console.log(data)
            this.setState({items: data});

        })   */
    },


    handleItemAdd(item){

        console.log('Item' + JSON.stringify(item));

        fetch('http://localhost:9000/todos', {
                method: 'post',
                body: JSON.stringify(item),
                headers: new Headers({
                    "Content-Type": "application/json"
                })
            })
        .then((res)=>res.json())
        .then((data)=> {
            console.log(data)
            this.setState({items: data});

        })    
    },

    deleteButton: function(){
       return(

           <div className="text-center clear-complete">
               <hr />
               <button
                   type="button"
                   onClick={this.onDeleteDoneClick}
                   className="btn btn-default">
                   Clear Complete
               </button>
           </div>
       )
    },


    onDeleteDoneClick: function() {
        for(var key in this.state.items) {
            if(this.state.items[key].done === true) {
                this.fb.child(key).remove();
            }
        }
    },
    handleDataLoaded: function(event){
        //console.dir(event.target.data)
        this.setState({loaded: true});
    }
})

var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));