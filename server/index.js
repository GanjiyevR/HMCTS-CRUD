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

app.listen(5000, () => {
    console.log("Server is running")
})