//1. Create a class
var Badge = require('./Badge')

var Thumbnail = React.createClass({

    render: function(){
        return (
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
              <img src="http://lorempixel.com/191/200" alt="Not found"/>
              <div className="caption">
                <h3>{this.props.heading}</h3>
                <p>{this.props.summary}</p>
                <p><Badge text={this.props.badgetext} count={this.props.badgecount}></Badge></p>
              </div>
            </div>
          </div>
        </div>
        )
    }
    
    
})

module.exports = Thumbnail

