const { PrismaClient } = require("./generated/prisma");
const prisma = new PrismaClient();

const cors = require('cors')
const express = require('express');
const app = express();

app.use(cors());
require('dotenv').config();
// const GIPHY_API_KEY = process.env.GIPHY_API_KEY;

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

// Get board given id
app.get('/boards/:id', async (req, res) => {
    const { id } = req.params;
    const boards = await prisma.board.findUnique({
        where: { id: parseInt(id) }
    });
    res.json(boards)
})

// Create board
app.post('/boards', async (req, res) => {
    const { category, title, author, gif_path } = req.body;
    const newBoard = await prisma.board.create({
        data: { title, category, author, gif_path }
    })
    res.send(201).json(newBoard);
})

// Delete board
app.delete('/boards/:id', async (req, res) => {
    const { id } = req.params;
    const deletedBoard = await prisma.board.delete({
        where: { id: parseInt(id) }
    })
    // Also delete cards under specified board
    const cards = await prisma.card.deleteMany({
        where: { board_id: parseInt(id) }
    })
    res.json(deletedBoard);
})

// Get board based on Category
app.get('/boards/:category', async (req, res) => {
    const { category } = req.params;
    const cards = await prisma.board.findMany( {
        where: { category : category },
    });
    res.json(cards)
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
    res.send(201).json(updatedBoard);
})

// Get all cards given board ID
app.get('/boards/:id/cards', async (req, res) => {
    const { id } = req.params;
    const cards = await prisma.card.findMany( {
        where: { board_id : parseInt(id) },
    });
    res.json(cards)
})

// Create new card given board ID
app.post('/boards/:board_id', async (req, res) => {
    let { board_id } = req.params;

    board_id = parseInt(board_id);
    
    const { title, author, message, gif_path, upvotes, pinned } = req.body;
    const newCard = await prisma.card.create({
        data: { title, author, message, gif_path, board_id, upvotes, pinned }
    })
    
    const cards = await prisma.card.findMany( {
        where: { board_id : parseInt(board_id) },
    });

    res.json(cards);
})

// Delete card by id
app.delete('/card/:id', async (req, res) => {
    const { id } = req.params;
    const deletedCard = await prisma.card.delete({
        where: { id: parseInt(id) }
    })
    
    res.json(deletedCard);
})


// Upvote
app.patch('/cards/:id/upvote', async (req, res) => {
    const { id } = req.params;

    const upvotedCard = await prisma.card.update({
        where: { id: parseInt(id) },
        data: {
            upvotes: {increment: 1}
        }
    })
    res.send(201).json(upvotedCard);
})

// Pinned
app.patch('/cards/:id/pin', async (req, res) => {
    const { id } = req.params;
    const { pinned, pinnedTime } = req.body;

    const pinnedCard = await prisma.card.update({
        where: { id: parseInt(id) },
        data: {
            pinned: !pinned,
            pinnedTime: pinnedTime
        }
    })
    res.send(201).json(pinnedCard);
})