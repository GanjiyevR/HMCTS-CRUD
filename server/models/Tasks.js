const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String,
    dueDate: Date
})

const TaskModel = mongoose.model("tasks", TaskSchema)
module.exports = TaskModel