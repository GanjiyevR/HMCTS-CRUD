# HMCTS-CRUD
Junior Software Developer – Cross Cutting Developer Challenge

Created using the MERN stack (MongoDB, Express, React, Node.js) - Bootstrap was utilised as a component library.

To get running, please have MongoDB installed, and a database created called 'crud', with the collection name of 'tasks'. Run it locally, or you'll have to update the URLs present in server/index.js.

Running the backend:
Open console
cd into the /server/ folder
First time setup: Type "npm install" in console
Type "npm start" in console.

Running frontend:
Open console
cd into the /client/ client
First time setup: Type "npm install" in console
Type "npm run dev" in console.

API Endpoints

GET /
    Retrieve all tasks.
    Response 200 OK:
    [
    {
        "_id": "661a1c4f6babc8c7fc0e2990",
        "title": "Finish project",
        "description": "Finalize all deliverables",
        "status": "Incomplete",
        "dueDate": "2025-05-01T00:00:00.000Z",
        "__v": 0
    }
    ]


GET /getTask/:id
    Retrieve a single task by ID.
    Params
        :id – Task ID
    Response 200 OK
    {
        "_id": "661a1c4f6babc8c7fc0e2990",
        "title": "Finish project",
        "description": "Finalize all deliverables",
        "status": "Incomplete",
        "dueDate": "2025-05-01T00:00:00.000Z"
    }

    Errors
        500 Internal Server Error – If task not found or DB error

POST /createTask
    Create a new task.
    Request Body:
    {
        "title": "New Task",
        "description": "Optional text",
        "status": "Incomplete",
        "dueDate": "2025-05-01"
    }
    Response
        201 Created
        {
            "_id": "661a123456abc...",
            "title": "New Task",
            "description": "Optional text",
            "status": "Incomplete",
            "dueDate": "2025-05-01T00:00:00.000Z"
        }
    Errors
        400 Bad Request – Missing or invalid fields

PUT /updateTask/:id
    Update a task by ID.
    Params
        :id – Task ID

    Request Body (Same as POST)
    Response 200 OK
    {
        "_id": "661a123456abc...",
        "title": "Updated Title",
        "description": "Updated description",
        "status": "In Progress",
        "dueDate": "2025-06-01T00:00:00.000Z"
    }

    Errors
        400 Bad Request – Invalid data
        500 Internal Server Error – Update failure

DELETE /deleteTask/:id
    Delete a task by ID.
    Params
        :id – Task ID

    Response 200 OK
        { "message": "Task deleted successfully" }

    Errors
        404 Not Found – Task doesn't exist
        500 Internal Server Error – Deletion failed