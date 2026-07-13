// This is a simple Express To-Do List application that allows users to view and add tasks to a list. The application uses Express.js to handle HTTP requests and responses.
const express = require('express');


// Create an instance of the Express application
const app = express();

// Define the port number for the server to listen on
const PORT = 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// In-memory array to store the to-do list items
const toDoList = ["Saurabh Gupta","Software Developer", "Oracle"]

// Route to handle GET requests to the root URL
app.get('/', (req, res)=>{
    res.status(200).send('Home Page !!');
});


// Route to handle GET requests to the /todos URL, returning the current to-do list
app.get('/todos',(req,res)=>{
    res.status(200).send(toDoList);
})


// Route to handle POST requests to the /todos URL, allowing users to add new tasks to the to-do list
app.post('/todos',(req, res)=>{
    let newTodo = req.body.item;
    toDoList.push(newTodo)

    res.status(201).send({
        message : "Task added successfully !!"
    })
})

app.delete('/todos',(req, res)=>{
    const itemToDelete = req.body.item;

    toDoList.find((elem,index)=>{
        if(itemToDelete === elem){
            toDoList.splice(index,1)
        }
    })
    res.status(204).send({
        message: `Deleted item ${req.body.item}`
    })
})

// Start the server and listen for incoming requests on the specified port
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});


