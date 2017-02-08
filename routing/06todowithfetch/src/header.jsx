var React = require('react');

module.exports = React.createClass({
    getInitialState: function(){
        return{
            text: ''
        }
    },

    render: function () {
        return (
            <div className="input-group">


                <input
                    type="text"
                    value = {this.state.text}
                    onChange = {this.handleInputChange}
                    className="form-control"
                    />
             <span className="input-group-btn">
              <button
                  className="btn btn-default"
                  onClick = {this.handleClick}
                  type="button">Add</button>
             </span>

            </div>
        )
    },

    handleClick: function(){
        console.log('t');
        console.log(this.state.text);

        this.props.itemAdd({text: this.state.text});     
        this.setState({text: ''});
    },


    handleInputChange: function(event){

        console.log(event.target.value);
        this.setState({'text': event.target.value});
    }




})


