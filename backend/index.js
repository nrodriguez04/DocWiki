const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const documentsRoute = require('./routes/documents');

// Use routes
app.use('/documents', documentsRoute);
// Add more routes as needed

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Define routes and API endpoints here

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
