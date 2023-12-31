const express = require('express');
const path = require('path');

const app = express();

// Set up a static directory to serve static files like CSS, images, and scripts
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the home page
app.get('/', (req, res) => {
    // Open the index.html file
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Listen on port 3000
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});


// Path: package.json
// add a start script
// "scripts": {
//     "start": "node server.js"
// };
