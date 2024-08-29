//import http
const { error } = require('console');
const http = require('http');
const mongoose = require('mongoose');
require('dotenv').config();
const server = http.createServer((request,response)=>{
    response.end('hello world!!');
});
server.listen(3001,'127.0.0.1',() =>{
    console.log('server is runing on http://127.0.0.1:3001')
});

mongoose.connect(process.env.mongoDB_URL).then(()=>{
    console.log("connected to DB");
}).catch((error)=>{
    console.log("error in connection: ",error);
});