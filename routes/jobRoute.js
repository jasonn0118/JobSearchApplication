const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

router.get('/jobs', async (req, res) => {
  try {
    const allJobs = await Job.find();
    res.json(allJobs);
  } catch (err) {
    res.status(500).json({ message: error.message });
  }
});

//Filter data.
router.get('/search/:filterString', async (req, res) => {
  try {
    const filterJobs = await Job.find({
      $or: [
        {job_title: {$regex: req.params.filterString, $options: "i"}},
        {company: {$regex: req.params.filterString, $options: "i"}}
      ]
    })
    res.json(filterJobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/jobs/:id', getSingleJob, async (req, res) => {
  try {
    return res.json(res.job);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/jobs/new', async (req, res) => {
  try {
    const job = new Job({
      job_title: req.body.job_title,
      level: req.body.level,
      company: req.body.company,
      occupancy: req.body.occupancy,
      due_date: new Date(req.body.due_date)
    });

    const newJob = await job.save();
    res.status(200).json({ newJob });
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

router.put('/jobs/:id', getSingleJob, async (req, res)=> {
  try {
    const updatingEntity = new Job({
      _id: res.job._id,
      job_title: res.job.job_title,
      level: res.job.level,
      company: res.job.company,
      occupancy: res.job.occupancy,
      due_date: new Date(res.job.due_date)
    });
    const updateJob = await updatingEntity.updateOne(req.body);
    res.json(updateJob);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

// Delete the entity
router.delete('/jobs/:id', getSingleJob, async (req, res) => {
  try {
    await res.job.deleteOne();
    res.json({ message: 'Delete entity successfully.' });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

//middleware
async function getSingleJob(req, res, next) {
  let job;
  try {
    //find record by id
    job = await Job.findById(req.params.id);
    console.log(req.params.id, '>>>>job')
    //if no match, report error
    if (job == null) {
      return res
        .status(404)
        .json({ message: 'Cannot find that plant record.' });
    }
  } catch (err) {
    //general error
    return res.status(500).json({ message: err.message });
  }
  res.job = job;
  //another id
  next();
}

module.exports = router;
