const { PrismaClient } = require("./generated/prisma");
const prisma = new PrismaClient();

const cors = require('cors')
const express = require('express');
const app = express();

app.use(cors());

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
    const { category, title, gif_path } = req.body;
    const newBoard = await prisma.board.create({
        data: { title, category, gif_path }
    })
})