//import http
const { error } = require('console');
const http = require('http');
const mongoose = require('mongoose');
const server = http.createServer((request,response)=>{
    response.end('hello world!!');
});
server.listen(3001,'127.0.0.1',() =>{
    console.log('server is runing on http://127.0.0.1:3001/fsd56wee')
});

mongoose.connect('mongodb://localhost:27017').then(()=>{
    console.log("connected to DB");
}).catch((error)=>{
    console.log("error in connection: ",error);
});