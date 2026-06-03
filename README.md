# TaskFlow - Web Technologies I Final Project

## Project Description

TaskFlow is a full-stack task management application developed using React, TypeScript, Express.js, and MongoDB. Users can create, view, filter, and delete tasks through a responsive web interface. All task data is stored permanently in MongoDB and managed through REST APIs.

---

## Group Information

### Group 1

**Aasiya Parveen** (2312101)

**Shoba Bai Ramesh Lal** (2312137)

BSCS 6A

Web Technologies I (CS4717)

---

## Technologies Used

### Frontend

* React
* TypeScript
* Vite
* Axios
* CSS

### Backend

* Node.js
* Express.js
* TypeScript

### Database

* MongoDB Atlas
* Mongoose

---

## Features Implemented

### Mandatory Features

* Display tasks using GET API
* Create tasks using POST API
* Delete tasks using DELETE API
* React controlled form
* Express routes and controllers
* MongoDB integration
* Frontend and backend API communication

### Assigned Product Feature

#### High Priority View

* Users can filter and view only high-priority tasks.
* High-priority task count is displayed on the dashboard.

### Assigned Engineering / Quality Feature

#### Disable Submit While Saving

* Submit button is disabled during task creation.
* "Saving..." message is displayed while the request is processing.

---

## Project Structure

website-project

├── frontend

│ ├── src

│ ├── public

│ └── package.json

│

├── backend

│ ├── src

│ │ ├── controllers

│ │ ├── models

│ │ ├── routes

│ │ └── server.ts

│ └── package.json

│

└── README.md

---

## API Endpoints

### Get All Tasks

GET /tasks

### Create Task

POST /tasks

### Delete Task

DELETE /tasks/:id

---

## MongoDB Schema

Task fields:

* title
* description
* priority

---

## Environment Variables

Create a `.env` file inside the backend folder:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd website-project
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

### Backend Setup

```bash
cd backend
npm install
npx ts-node src/server.ts
```

Backend runs on:

```text
http://localhost:5000
```

---

## How to Use

1. Start backend server.
2. Start frontend application.
3. Create a new task.
4. View tasks from MongoDB.
5. Filter high-priority tasks.
6. Delete tasks when no longer needed.

---

## Testing

Verified Features:

* Task creation
* Task retrieval
* Task deletion
* MongoDB persistence
* High Priority filtering
* Disabled submit button during save operation

---

## GitHub Repository

Project source code and commit history are maintained on GitHub according to project requirements.

---

## Future Improvements

* Update/Edit Tasks
* Search Functionality
* Status Management
* Due Dates
* User Authentication
* Toast Notifications

---

## Conclusion

TaskFlow successfully demonstrates a complete full-stack MERN-style workflow using React, Express, and MongoDB. The application satisfies all mandatory project requirements as well as the assigned product and engineering features.
