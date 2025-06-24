import express from 'express';
import mongoose from 'mongoose';

let usersSchema = new mongoose.Schema({
    username: String,
    age: String,
    shopping: Number
});

let users = mongoose.model('users', usersSchema);

const app = express();

const PORT = 3333;

app.get('/', async (req, res) => {
    let data = await users.find();
    res.json(data);
});

try {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
    console.log("DataBase connected.");
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
} catch (err) {
    console.error('Failed to connect to MongoDB:', err);
}