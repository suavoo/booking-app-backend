const router = require('express').Router();
let Artist = require('../models/artist.model');

router.route('/').get((req, res) => {
    Artist.find()
        .then(artists => res.json(artists))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const artistname = req.body.artistname;
    const artistgenre = req.body.artistgenre;
    const artisttechnik = req.body.artisttechnik;
    const artisttel = req.body.artisttel;
    const artistemail = req.body.artistemail;
    const artisthomepage = req.body.artisthomepage;
    const artistkonto = req.body.artistkonto;
    const artistprozente = req.body.artistprozente;

    const newArtist = new Artist({
        artistname,
        artistgenre,
        artisttechnik,
        artisttel,
        artistemail,
        artisthomepage,
        artistkonto,
        artistprozente
    });

    newArtist.save()
        .then(() => res.json('Artist added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Artist.findById(req.params.id)
        .then(artist => res.json(artist))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Artist.findByIdAndDelete(req.params.id)
        .then(() => res.json('Artist deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Artist.findById(req.params.id)
        .then(artist => {
            artist.artistname = req.body.artistname;
            artist.artistgenre = req.body.artistgenre;
            artist.artisttechnik = req.body.artisttechnik;
            artist.artisttel = req.body.artisttel;
            artist.artistemail = req.body.artistemail;
            artist.artisthomepage = req.body.artisthomepage;
            artist.artistkonto = req.body.artistkonto;
            artist.artistprozente = req.body.artistprozente;

            artist.save()
                .then(() => res.json('Artist updated'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;