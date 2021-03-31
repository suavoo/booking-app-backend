const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true } );

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
})

const artistRouter = require('./routes/artist');
const tasksRouter = require('./routes/tasks');
const ticketRouter = require('./routes/ticket');
const venueRouter = require('./routes/venue');

app.use('/artist', artistRouter);
app.use('/tasks', tasksRouter);
app.use('/ticket', ticketRouter);
app.use('/venue', venueRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});