const Todo = require('../models/todo');

const todoController = {
    createTodo: async (req,res)=>{
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
    
    },
    getTodo: async(req,res)=>{
        try{
            console.log(req.query)
            console.log(req.method)
            console.log(req.url)
            console.log(req.params)
            console.log(req.body)
        }
        catch(error){
            res.status(500).send({message:error.message})
        }
    }
};

module.exports = todoController;