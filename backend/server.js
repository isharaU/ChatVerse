const express = require('express'); // Import express
const {chats} = require('./data/data'); // Import chats data
const dotenv = require('dotenv'); // Import dotenv
const connectDB = require('./config/db');

const app = express(); // Create an express app
dotenv.config(); // Configure dotenv
connectDB(); // Connect to the database

app.get('/',(req,res) => { // Create a route for the home page
    res.send('API is Running'); // Send a response to the client
});

app.get('/api/chat',(req,res) => { 
    res.send(chats); 
});

const PORT = process.env.PORT || 5000; // Define the port

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));