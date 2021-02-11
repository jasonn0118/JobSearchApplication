import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import JobServices from '../services/JobService';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

const Job = (props) => {
  const history = useHistory();
  const initialJobObject = {
    _id: null,
    job_title: '',
    level: '',
    company: '',
    occupancy: '',
    due_date: new Date(),
  };

  const [isNew, setIsNew] = useState(false);
  const [currentJob, setCurrentJob] = useState(initialJobObject);

  const getJob = (id) => {
    JobServices.getSingleJob(id)
      .then((res) => {
        setCurrentJob(res.data);
        console.log('Single Job Fetch: ', res.data);
      })
      .catch((err) => {
        console.log('Single Job Fetch Failure: ', err);
      });
  };

  useEffect(() => {
    if (props.match.params.id) {
      getJob(props.match.params.id);
    } else {
      setIsNew(true);
    }
  }, [props.match.params.id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentJob({ ...currentJob, [name]: value });
  };

  const onCreate = () => {
    const newEntity = {
      job_title: currentJob.job_title,
      level: currentJob.level,
      company: currentJob.company,
      occupancy: currentJob.occupancy,
      due_date: currentJob.due_date,
    };

    JobServices.createJob(newEntity)
      .then((res) => {
        console.log(res, 'Result');
        history.push('/');
      })
      .catch((err) => {
        console.log('Fetch create: ', err);
      });
  };

  const onEdit = () => {
    const updateEntity = {
      _id: currentJob._id,
      job_title: currentJob.job_title,
      level: currentJob.level,
      company: currentJob.company,
      occupancy: currentJob.occupancy,
      due_date: currentJob.due_date,
    };
    JobServices.updateJob(currentJob._id, updateEntity)
      .then((res) => {
        console.log(res.data);
        history.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  console.log(props.match.params.id, "id")
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Form style={{ minWidth: '30vw' }} >
        <Form.Group controlId='jobTitle'>
          <Form.Label>Job Title</Form.Label>
          <Form.Control
            as='select'
            name='job_title'
            value={currentJob.job_title}
            onChange={handleInputChange}
          >
            <option value='Web Developer'>Web Developer</option>
            <option value='Backend Developer'>Backend Developer</option>
            <option value='Frontend Developer'>Frontend Developer</option>
            <option value='Database manager'>Database manager</option>
            <option value='Project manager'>Project manager</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId='level'>
          <Form.Label>Job Level</Form.Label>
          <Form.Control
            as='select'
            name='level'
            value={currentJob.level}
            onChange={handleInputChange}
          >
            <option value='Internship'>Internship</option>
            <option value='Entry'>Entry</option>
            <option value='Intermediate'>Intermediate</option>
            <option value='Senior'>Senior</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId='companyName'>
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            type='text'
            name='company'
            placeholder='Company Name'
            value={currentJob.company}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId='Occupancy'>
          <Form.Label>Occupancy</Form.Label>
          <Form.Control
            type='text'
            name='occupancy'
            placeholder='Hiring people number'
            value={currentJob.occupancy}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId='DueDate'>
          <Form.Label>Due Date</Form.Label>
          <Form.Control
            type='date'
            name='due_date'
            value={moment(currentJob.due_date).format('YYYY-MM-DD')}
            onChange={handleInputChange}
          />
        </Form.Group>
        {isNew ? (
          <Button
            style={{ margin: '0.5rem' }}
            onClick={onCreate}
            variant='success'
          >
            Create
          </Button>
        ) : (
          <Button
            style={{ margin: '0.5rem' }}
            onClick={onEdit}
            variant='primary'
          >
            Edit
          </Button>
        )}
        <Button href='/' style={{ margin: '0.5rem' }} variant='danger'>
          Cancel
        </Button>
      </Form>
    </div>
  );
};

export default Job;
