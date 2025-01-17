const express = require('express'); // Import express

const app = express(); // Create an express app

app.get('/',(req,res) => { // Create a route for the home page
    res.send('API is Running'); // Send a response to the client
});

app.listen(5000,console.log('Server is running on port 5000')); // Listen on port 5000