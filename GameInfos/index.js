const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname)));

// Serve the index.html file for the root route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Server activation
const port = 3000;
app.listen(port, () => {
  console.debug(`Server listening on port ${port}`);
});

