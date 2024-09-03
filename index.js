const app = require('./app')

const mongoose = require('mongoose');
const {mongoDB_URL,port} = require('./utils/config');

app.listen(port,() =>{
    console.log('server is runing on http://127.0.0.1:${process.env.port}')
});

mongoose.connect(mongoDB_URL).then(()=>{
    console.log("connected to DB");
}).catch((error)=>{
    console.log("error in connection: ",error);
});