const { PrismaClient } = require("./generated/prisma");
const prisma = new PrismaClient();

const cors = require('cors')
const express = require('express');
const app = express();

app.use(cors());
require('dotenv').config();
const GIPHY_API_KEY = process.env.GIPHY_API_KEY;

const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

// Root Path
app.get('/', (req, res) => {
    res.send('Kudos Board')
})

// Get all boards
app.get('/boards', async (req, res) => {
    const boards = await prisma.board.findMany();
    res.json(boards)
})

// Create board
app.post('/boards', async (req, res) => {
    const { category, title, author, gif_path } = req.body;
    const newBoard = await prisma.board.create({
        data: { title, category, author, gif_path }
    })
})

// Add GIF
app.patch('/boards/:id/gif-path', async (req, res) => {
    const { gif_path } = req.body;
    const { id } = req.params;

    const updatedBoard = await prisma.board.update({
        where: { id: parseInt(id) },
        data: {
            gif_path,
        }
    })
    res.json(updatedBoard);
})