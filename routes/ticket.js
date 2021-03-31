const router = require('express').Router();
let Ticket = require('../models/ticket.model');

router.route('/').get((req, res) => {
    Ticket.find()
        .then(tickets => res.json(tickets))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const ticketartist = req.body.ticketartist;
    const ticketvenue = req.body.ticketvenue;
    const ticketdate = req.body.ticketdate;
    const tickettime = req.body.tickettime;
    const tickettype = req.body.tickettype;
    const ticketresult = req.body.ticketresult;
    const ticketnote1 = req.body.ticketnote1;
    const ticketnote2 = req.body.ticketnote2;
    const ticketgage = req.body.ticketgage;

    const newTicket = new Ticket({
        ticketartist,
        ticketvenue,
        ticketdate,
        tickettime,
        tickettype,
        ticketresult,
        ticketnote1,
        ticketnote2,
        ticketgage,
    });

    newTicket.save()
        .then(() => res.json(newTicket._id))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Ticket.findById(req.params.id)
        .then(ticket => res.json(ticket))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Ticket.findByIdAndDelete(req.params.id)
        .then(() => res.json('Ticket deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Ticket.findById(req.params.id)
        .then(ticket => {
            ticket.ticketartist = req.body.ticketartist;
            ticket.ticketvenue = req.body.ticketvenue;
            ticket.ticketdate = req.body.ticketdate;
            ticket.tickettime = req.body.tickettime;
            ticket.tickettype = req.body.tickettype;
            ticket.ticketresult =req.body.ticketresult;
            ticket.ticketnote1 = req.body.ticketnote1;
            ticket.ticketnote2 = req.body.ticketnote2;
            ticket.ticketgage = req.body.ticketgage;

            ticket.save()
                .then(() => res.json('Ticket updated'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;