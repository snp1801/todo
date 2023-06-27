import express from 'express';
import { addTodo, getTodos, toggleTodoDone, editTodo, deleteTask } from '../controller/todo-controller.js';

const route = express.Router();

route.post('/todos', addTodo)

route.get('/todos', getTodos)

route.get('/todos/:id', toggleTodoDone)

route.put('/todos/:id', editTodo)

route.delete('/todos/:id', deleteTask)

export default route;