const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const route = express.Router();
const port = 3600;

// Middleware to parse JSON body
app.use(express.json());

// Custom middleware to check for primaryKey
const middleware = (req, res, next) => {
  if (req.body.primaryKey) {
    next();
  } else {
    console.log("❌ No primary key found");
    return res.status(401).send("Unauthorized: No primary key");
  }
};

// Global middleware (just for logging)
app.use((req, res, next) => {
  console.log('Server is handling a request...');
  next();
});

// Default route
app.get('/', (req, res) => {
  res.send('Hello world');
});

// Route with middleware
route.post('/admin', middleware, (req, res) => {
  // Write file
  fs.writeFile('filename.txt', "new data", (err) => {
    if (err) return console.error(err);
    console.log("✅ File written successfully");

    // Rename file after writing
    fs.rename('filename.txt', 'newfilename.txt', (err) => {
      if (err) return console.error(err);
      console.log("✅ File renamed successfully");
    });
  });

  // Path example
  const urlpath = path.join(__dirname, "newfilename.txt");
  console.log("File path:", urlpath);

  res.send("Admin route executed successfully!");
});

// Register the router
app.use(route);

// Start the server
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
