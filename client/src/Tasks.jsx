import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Tasks () {
    const [tasks, setTasks] = useState([{
        Title: "Feed the Cat", Description: "He is hungry", Status: "Incomplete", DueDate: Date("2025-04-26")}
    ])

    const formatDate = (date) => new Date(date).toLocaleDateString();
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
                                return <tr>
                                    <td>{task.Title}</td>
                                    <td>{task.Description}</td>
                                    <td>{task.Status}</td>
                                    <td>{formatDate(task.DueDate)}</td>
                                    <td>
                                        <Link to="/update" className="btn btn-warning">Edit</Link>
                                        <button className="btn btn-danger">Delete</button>
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