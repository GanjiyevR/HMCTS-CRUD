const express = require("express")
const mongoose = require ("mongoose")
const cors = require("cors")
const TaskModel = require("./models/Tasks")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/crud")
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });

app.get("/", async (req, res) => {
    try {
        const tasks = await TaskModel.find({});
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: "Failed to retrieve tasks", error: err.message });
    }
});

app.get("/getTask/:id", async (req, res) => {
    const id = req.params.id;
    TaskModel.findById({id})
    try {
        const tasks = await TaskModel.findById(req.params.id);
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: "Failed to retrieve tasks", error: err.message });
    }
});

app.post("/createTask", async (req, res) => {
    try {
        const task = new TaskModel(req.body);
        const savedTask = await task.save();
        res.status(201).json(savedTask);
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: "Failed to create task", error: err.message });
    }
});

app.put("/updateTask/:id", async (req, res) => {
    try {
        const updated = await TaskModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ message: "Failed to update task", error: err.message });
    }
});

app.delete("/deleteTask/:id", async (req, res) => {
    try {
        const deletedTask = await TaskModel.findByIdAndDelete(req.params.id);
        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.json({ message: "Task deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Failed to delete task", error: err.message });
    }
});

app.listen(5000, () => {
    console.log("Server is running")
})