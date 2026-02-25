// file system Module (fs module)
const fs = require('fs');
//sync
const files = fs.readdirSync('./');
console.log(files);

// //asynchronous
// //all asynchronous required the call back function at the last argument
fs.readdir('./', function(err, files){
    if(err) console.log("error " + err);
    else console.log(files)
});