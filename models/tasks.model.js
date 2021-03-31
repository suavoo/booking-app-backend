const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tasksSchema = new Schema({
    taskartist: { type: String, required: true },
    taskvenue: String,
    taskticketdate: String,
    tasktickettime: String,
    tasktickettype: String,
    taskticketid: String,
    taskname: String,
    taskdone: { type: Boolean, required: true },
    taskduedate: String,
    tasknote: String,
}, {
    timestamps: true,
});

const Tasks = mongoose.model('Tasks', tasksSchema);

module.exports = Tasks;