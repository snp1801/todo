import todo from "../model/todo.js";
import Todo from "../model/todo.js";

export const addTodo = async (req, res) => {
    try {
        const newTodo = await Todo.create({
            task: req.body.data,
            createdAt: Date.now()
        })
        await newTodo.save();
        return res.status(200).json(newTodo);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find({}).sort({'createdAt': -1})
        return res.status(200).json(todos);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export const toggleTodoDone = async (req, res) => {
    try {
        const todoRef = await Todo.findById(req.params.id);
        const todo = await Todo.findByIdAndUpdate(
            {_id : req.params.id},
            {done: !todoRef.done}
        )
        todo.save();
        return res.status(200).json(todo);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export const editTodo = async (req, res) => {
    try {
        await Todo.findByIdAndUpdate(
            {_id : req.params.id},
            {task: req.body.data}
        )
        const todo = await Todo.findById(req.params.id);
        return res.status(200).json(todo);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export const deleteTask = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id)
        return res.status(200).json(todo);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}