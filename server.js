const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist/merzkiself/browser')));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/merzkiself/browser/index.html'));
});

// Start the app by listening on the default port
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 