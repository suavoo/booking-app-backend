const router = require('express').Router();
let Tasks = require('../models/tasks.model');

router.route('/').get((req, res) => {
    Tasks.find()
        .then(tasks => res.json(tasks))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const taskartist = req.body.taskartist;
    const taskvenue = req.body.taskvenue;
    const taskticketdate = req.body.taskticketdate;
    const tasktickettime = req.body.tasktickettime;
    const tasktickettype = req.body.tasktickettype;
    const taskticketid = req.body.taskticketid;
    const taskname = req.body.taskname;
    const taskdone = req.body.taskdone;
    const taskduedate = req.body.taskduedate;
    const tasknote = req.body.tasknote;

    const newTask = new Tasks({
        taskartist,
        taskvenue,
        taskticketdate,
        tasktickettime,
        tasktickettype,
        taskticketid,
        taskname,
        taskdone,
        taskduedate,
        tasknote,
    });

    newTask.save()
        .then(() => res.json(newTask.taskticketid))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Tasks.findById(req.params.id)
        .then(task => res.json(task))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Tasks.findByIdAndDelete(req.params.id)
        .then(() => res.json('Task deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Tasks.findById(req.params.id)
        .then(task => {
            task.taskartist = req.body.taskartist;
            task.taskvenue = req.body.taskvenue;
            task.taskticketdate = req.body.taskticketdate;
            task.tasktickettime = req.body.tasktickettime;
            task.tasktickettype = req.body.tasktickettype;
            task.taskticketid = req.body.taskticketid;
            task.taskname = req.body.taskname;
            task.taskdone = req.body.taskdone;
            task.taskduedate = req.body.taskduedate;
            task.tasknote = req.body.tasknote;

            task.save()
                .then(() => res.json('Task updated'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;