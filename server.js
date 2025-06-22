const express = require('express');
const path = require('path');

const app = express();
const PORT = 3333;

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/home', (req, res) => {
    res.send({name: "debottam", age: 22});
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});