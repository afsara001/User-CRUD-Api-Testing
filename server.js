const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 1111;
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});


// Middleware
app.use(bodyParser.json());

// Simulated database
const dataFilePath = './users.json';

// Helper function to read/write JSON file
const readData = () => JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
const writeData = (data) => fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));

// CRUD Endpoints

// Get all users
app.get('/users', (req, res) => {
    const users = readData();
    res.status(200).json(users);
});

 //Get user name ID (bug found here)
app.get('/users/:id', (req, res) => {
    const users = readData();
    console.log("..........",req?.params.id);
    //console.log("..........",req?.params.name);
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
});


// // Get user by name
// app.get('/users/:name', (req, res) => {
//     const users = readData();
//     //console.log("..........",req?.params.id);
//     console.log("..........",req?.params.name);
//     const user = users.find(u => u.name === req.params.name);
//     if (!user) return res.status(404).json({ message: 'User not found' });
//     res.status(200).json(user);
// });

// Create a new user
app.post('/users', (req, res) => {
    const users = readData();
    const newUser = { id: Date.now(), ...req.body };
    users.push(newUser);
    writeData(users);
    res.status(201).json(newUser);
});

// Update user by ID
app.put('/users/:id', (req, res) => {
    const users = readData();
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) return res.status(404).json({ message: 'User not found' });

    users[userIndex] = { ...users[userIndex], ...req.body };
    writeData(users);
    res.status(200).json(users[userIndex]);
});

// Delete user by ID
app.delete('/users/:id', (req, res) => {
    const users = readData();
    const filteredUsers = users.filter(u => u.id !== parseInt(req.params.id));
    writeData(filteredUsers);
    res.status(204).send();
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
