var ThumbnailList = require('./ThumbnailList')
var options= {
    
   thumbnails:  [{
    heading: "Thumbnail heading 1 ",
    summary: "Thumbnail summary 1 ",
    badgetext: "Inbox",
    badgecount: 343,
},
                
                {
    heading: "Thumbnail heading 3",
    summary: "Thumbnail summary 3",
    badgetext: "Inbox",
    badgecount: 343,
}]
    
}

//2. Create an instance
var obj = React.createElement(ThumbnailList, options)

//3. Render
ReactDOM.render(obj, document.getElementById('mount-point'))