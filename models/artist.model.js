const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const artistSchema = new Schema({
    artistname: { type: String, required: true },
    artistgenre: String,
    artisttechnik: String,
    artisttel: String, 
    artistemail: String, 
    artisthomepage: String,
    artistkonto: String,
    artistprozente: Number
}, {
    timestamps: true,
});

const Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;