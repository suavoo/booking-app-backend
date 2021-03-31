const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    ticketartist: { type: String, required: true },
    ticketvenue: { type: String, required: true },
    ticketdate: { type: String, required: true },
    tickettime: String,
    tickettype: String,
    ticketresult: String,
    ticketnote1: String,
    ticketnote2: String,
    ticketgage: String,
}, {
    timestamps: true,
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;