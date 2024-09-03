const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    description: String,
    status:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('todo',todoSchema,'todos');