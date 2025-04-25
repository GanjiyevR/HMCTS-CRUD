import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function CreateTask() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('Incomplete');
    const [dueDate, setDueDate] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const taskData = { title, description, status, dueDate };

        try {
            const response = await axios.post("http://localhost:5000/createTask", taskData);
            console.log("Task created successfully:", response.data );
            navigate('/')
        } catch (error) {
            console.error("Error creating task:", error.response ? error.response.data : error.message);
            alert("Failed to create task. Please try again.");
        }

    };

    return (
        <div className="d-flex vh-100 bg-dark align-items-center justify-content-center">
            <div className="w-50 bg-white rounded p-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
            <h3 className="mb-0">Create a New Task</h3>
            <button className="btn-close" onClick={() => navigate('/')} aria-label="Close"></button>
            </div>        
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Title (required)</label>
                        <input type="text" className="form-control" placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <input type="text" className="form-control" placeholder="Enter Description (optional)" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Status</label>
                        <select className="form-select" value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="Incomplete">Incomplete</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Complete">Complete</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Due Date (required)</label>
                        <input type="date" className="form-control" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
                    </div>

                    <button type="submit" className="btn btn-success w-100">Create Task</button>
                </form>
            </div>
        </div>
    )
}

export default CreateTask;