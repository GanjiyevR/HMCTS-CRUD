import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Tasks () {
    const [tasks, setTasks] = useState([])
    const formatDate = (date) => new Date(date).toLocaleDateString();

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this task?");
        if (!confirmDelete) return;
    
        try {
            await axios.delete(`http://localhost:5000/deleteTask/${id}`);
            setTasks(tasks.filter(task => task._id !== id));
        } catch (err) {
            console.error("Error deleting task:", err.message);
            alert("Failed to delete task.");
        }
    };

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get("http://localhost:5000");
                setTasks(response.data);
            } catch (err) {
                console.error("Error fetching tasks:", err.message);
            }
        };
        fetchTasks();
    }, []);
    
    return (
        <div className="d-flex vh-100 bg-dark align-items-center justify-content-center">
            <div className="w-50 bg-white rounded p-3">
              <h3 className="mb-3">Task List</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Due Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map((task) => {
                                return <tr key={task._id}>
                                    <td>{task.title}</td>
                                    <td>{task.description}</td>
                                    <td>{task.status}</td>
                                    <td>{formatDate(task.dueDate)}</td>
                                    <td>
                                        <Link to={`/update/${task._id}`} className="btn btn-warning">Edit</Link>
                                        <button className="btn btn-danger ms-1" onClick={() => handleDelete(task._id)}>Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
                <Link to="/create" className="btn btn-success w-100">Add a new Task</Link>
            </div>
        </div>
    )
}

export default Tasks;