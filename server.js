const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000; // You can use any available port

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
