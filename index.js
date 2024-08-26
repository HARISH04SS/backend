const express = require('express');
const app = express();
app.get('/',(request,response)=>{
    response.send("Hello world");
})
app.listen(3001,()=>{
    console.log('server is running on 3001 at http://1270.0.1:3001');
})