
var express = require("express");
var bodyParser   = require('body-parser');
var cors = require('cors');

var app = express();

app.use('/', express.static(__dirname + '/WebContent'));
app.use(bodyParser.json());
app.use(cors());

// launch ======================================================================
app.listen(8000);
console.log('The magic happens on port 8000');
 //======================================================================


app.get("/getData", function(request, response){
    console.log("server gets the request");
    response.json({"success":true});
});

app.get("/getBooks", function(req, res){
    console.log("returning books")
//    res.json({"success":true});
//    res.set({'Access-Control-Allow-Origin':'*'})
    res.json(loadAllBooks());
    
})


app.post("/abc", function(req, res){
    console.log("hello");
    console.log(req.body);
    // connect to db and store the data
    // fetch data
    res.json({"success":true});
});

app.post("/book", function(request, response){
    console.log(request.body)
    var books = loadAllBooks();
    console.log(books);
    var book = books.filter(function(book){
        if(book.id === request.params.id){
            response.status(200);
            return book;
        } else {
            response.status(404);
//            return null;
        }
    })
    console.log(book);
    response.set({'Content-Type': 'application/json'}).json(book);
});


function getUser(id, callback){

    var db = new mongo.Db("userDb", new mongo.Server(dbHost, dbPort, {}));
    db.open(function(error){
        console.log("We are connected!" +host + ":" +port);

        db.collection("user", function(error, collection){
            console.log("We have the collection");
            if(error){
                console.log("Error")
                console.log(error)
            }
            collection.find({"id":id.toString()}, function(error, cursor){
                if(error){
                    console.log("Error")
                    console.log(error)
                }

                cursor.toArray(function(error, users){
                    if(users.length == 0){
                        console.log("No user found");
                        callback(false);
                    } else{
                        callback(users[0])
                        console.log("Found a user", users[0]);
                    }

                });
            });
        });

    });
}

function loadAllBooks(){
        var books = [
        {
            "id": 1,
            "title":"ReactJS"
        },
        {
            "id": 2,
            "title":"Basic JavaScript"
        },
        {
            "id": 3,
            "title":"Advanced JS"
        },
        {
            "id": 4,
            "title":"AngularJS"
        }
    ];
    return books;
}