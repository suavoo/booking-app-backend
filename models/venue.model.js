const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const venueSchema = new Schema({
    venuename: { type: String, required: true },
    venueadress: String,
    venuecity: String,
    venueregion: String,
    venuecountry: String,
    venuecontactname: String,
    venuetel: String,
    venueemail: String,
    venuetechnik: String,
    venuenote: String,
    venuetime: String
}, {
    timestamps: true,
});

const Venue = mongoose.model('Venue', venueSchema);

module.exports = Venue;