var React = require('react');
var ListItem = require('./list-item')
module.exports = React.createClass({
    render: function () {
        console.log('Render List')
        return (
            <div>
                {this.renderItems()}
            </div>
        )
    },

  renderItems: function(){
        console.log('Render List Items Changes and  ')
        console.log(this.props.items);
        //if(this.props.items && Object.keys(this.props.items).length === 0){
        if(!this.props.items){
            return (
                <h4> Add a todo to get started </h4>
            )
        }
        else{
            console.log('Callled twice')

            var children = [];

          /*  for(var key in this.props.items){
                console.log('Callled thrice')
                console.log(key)
                var item = this.props.items[key];
                item.key = key;
                children.push(
                    <ListItem item={item}/>
                )
            }
*/

            for(var key in this.props.items) {
                var item = this.props.items[key];
                if(item){
                    item.key = key;
                    console.log('Cadlled thrice')
                    console.log(key)
                    if(key!='.key'){
                        children.push(
                            <ListItem
                                item={item}
                                key={key}
                                itemDelete={this.props.itemDelete}
                                >
                            </ListItem>
                        )
                    }
                }


            }
            return children;
        }
    }



})