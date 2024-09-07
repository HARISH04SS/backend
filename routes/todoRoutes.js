const express = require('express');
const todoController = require('../controllers/todocontroller');
const todoRouter = express.Router();


todoRouter.post('/',todoController.createTodo);
todoRouter.get('/',todoController.getTodo);

module.exports = todoRouter;