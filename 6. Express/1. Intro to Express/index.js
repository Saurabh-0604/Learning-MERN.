// importing express module
const express = require('express');

// creating an express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Port number
const port = 8080;

// a sample get route
app.get('/',(req, res)=>{
    res.status(200).send('Hello World');
})

// listening to the server
app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
})

