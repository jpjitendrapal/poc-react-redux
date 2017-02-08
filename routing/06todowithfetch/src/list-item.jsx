var React = require('react')
// var rootUrl = 'https://sizzling-torch-245.firebaseio.com/'
module.exports = React.createClass({

    getInitialState: function () {

        console.log('See how many itmes')
        return {
            text: this.props.item.text,
            done: this.props.item.done,
            textChanged: false
        }
    },
    componentWillMount: function () {
        // this.fb = new Firebase(rootUrl + 'items/' + this.props.item.key);
    },

    componentWillReceiveProps(newProps){
        console.log('Old Props');
        console.log(this.props)
        console.log('New Props');
        console.log(newProps)


        this.setState({text: this.newProps.item.text});

    }

    ,
    render: function () {
        return (
            <div className="input-group">

                 <span className="input-group-addon">
                    <input type="checkbox"
                           checked={this.state.done}
                           onChange={this.handleDoneChange}
                        />
                 </span>
                <input type="text"
                       disabled= {this.state.done}
                       className="form-control"
                       value={this.state.text}
                       onChange={this.handleTextChange}
                    />
                <span className="input-group-btn">
                    {this.changesButtons()}

                    <button
                        className="btn btn-default"
                        onClick={this.handleDeleteClick}>
                        Delete
                    </button>
                </span>

            </div>
        )
    }
    ,

    changesButtons: function () {
        if (!this.state.textChanged) {
            return null
        }
        else {
            return [
                <button className="btn btn-default" onClick={this.handleSaveClick}>Save</button>,
                <button className="btn btn-default" onClick={this.handleUndoClick}>Undo</button>
            ]
        }

    },

    handleSaveClick: function () {
        // this.fb.update({text: this.state.text})
        // this.setState({textChanged: false})
    }
    ,
    handleUndoClick: function () {
        this.setState({
            text: this.props.item.text,
            textChanged: false
        })

    }
    ,

    handleTextChange: function (event) {
        console.log();
        this.setState({
            text: event.target.value,
            textChanged: true

        })

    }
    ,

    handleDoneChange: function (event) {
        var update = {done: event.target.checked}
        this.setState(update);
    }
    ,
    handleDeleteClick: function () {
        // this.fb.remove();
        console.log(this.props.key);
        this.props.itemDelete(this.props.key)
    }
})