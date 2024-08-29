const app = require('./app')

const mongoose = require('mongoose');
require('dotenv').config();

app.listen(3001,() =>{
    console.log('server is runing on http://127.0.0.1:3001')
});

mongoose.connect(process.env.mongoDB_URL).then(()=>{
    console.log("connected to DB");
}).catch((error)=>{
    console.log("error in connection: ",error);
});