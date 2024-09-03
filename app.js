const express = require('express');
const app = express();
const Todo = require('./models/todo');
app.use(express.json());
app.post("/api/v1/todos",async (req,res)=>{
    try{
        const {description} = req.body;
        const newTodo = new Todo({
            description
        })
        const savedTodo = await newTodo.save();
        res.send({message: 'saved succesfully',todo:savedTodo});
    } catch(error){
        res.status(500).send({message:error.message})
    }

})


module.exports = app;