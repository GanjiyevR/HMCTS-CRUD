const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    status: {
        type: String,
        enum: ['Incomplete', 'In Progress', 'Complete'],
        default: 'Incomplete'
    },
    dueDate: {
        type: Date,
        required: true,
    }
})

const TaskModel = mongoose.model("tasks", TaskSchema)
module.exports = TaskModel