const router = require('express').Router();
let Venue = require('../models/venue.model');

router.route('/').get((req, res) => {
    Venue.find()
        .then(venues => res.json(venues))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const venuename = req.body.venuename;
    const venueadress = req.body.venueadress;
    const venuecity = req.body.venuecity;
    const venueregion = req.body.venueregion;
    const venuecountry = req.body.venuecountry;
    const venuecontactname = req.body.venuecontactname;
    const venuetel = req.body.venuetel;
    const venueemail = req.body.venueemail;
    const venuetechnik = req.body.venuetechnik;
    const venuenote = req.body.venuenote;
    const venuetime = req.body.venuetime;

    const newVenue = new Venue({
        venuename,
        venueadress,
        venuecity,
        venueregion,
        venuecountry,
        venuecontactname,
        venuetel,
        venueemail,
        venuetechnik,
        venuenote,
        venuetime
    });

    newVenue.save()
        .then(() => res.json('Venue added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Venue.findById(req.params.id)
        .then(venue => res.json(venue))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Venue.findByIdAndDelete(req.params.id)
        .then(() => res.json('Venue deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Venue.findById(req.params.id)
        .then(venue => {
            venue.venuename = req.body.venuename;
            venue.venueadress = req.body.venueadress;
            venue.venuecity = req.body.venuecity;
            venue.venueregion = req.body.venueregion;
            venue.venuecountry = req.body.venuecountry;
            venue.venuecontactname = req.body.venuecontactname;
            venue.venuetel = req.body.venuetel;
            venue.venueemail = req.body.venueemail;
            venue.venuetechnik = req.body.venuetechnik;
            venue.venuenote = req.body.venuenote;
            venue.venuetime = req.body.venuetime;

            venue.save()
                .then(() => res.json('Venue updated'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;