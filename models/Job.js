const mongoose = require('mongoose');
const { Schema } = mongoose;

const jobSchema = new Schema({
    job_title: String,
    level: String,
    company: String,
    occupancy: String,
    due_date: Date
});

const Job = mongoose.model("Job", jobSchema, "jobs");
module.exports = Job;