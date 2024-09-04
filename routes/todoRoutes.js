const express = require('express');
const todoController = require('../controllers/todocontroller');
const todoRouter = express.Router();


todoRouter.post('/',todoController.createTodo);

module.exports = todoRouter;