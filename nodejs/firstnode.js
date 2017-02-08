var fs = require('fs');

console.log('Starting...')

//var contents =fs.readFileSync('./public/node.txt');


fs.readFile('./public/node.txt', function(err, contents){
    console.log('Contents' + contents)
})



console.log('Finished...')