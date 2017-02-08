//1. Create a class

var Thumbnail = require('./Thumbnail');
var ThumbnailList = React.createClass({

    render: function(){
        
        var list = this.props.thumbnails.map(function(thumbnail, index){
            console.log(thumbnail);
            return <Thumbnail key={index} {...thumbnail}></Thumbnail>
            
        })
        
        return (
            <div>
                {list}
            </div>
        )
    }
    
    
})
module.exports = ThumbnailList

