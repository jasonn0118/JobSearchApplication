import React, { useEffect, useState } from 'react';
import JobServices from '../services/JobService';
import { Button, Table, Spinner } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import PaginationPage from '../components/Pagination';
import moment from 'moment';

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage, setJobsPerPage] = useState(10);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const searchString = searchParams.get('searchString');

  //initial Render
  useEffect(() => {
    getFetchList();
  }, []);

  useEffect(() => {
    if(searchString == null || searchString.trim()===''){
      getFetchList();
    } else {
      getFilterJobs(searchString);
    }
  },[searchString]);


  const getFetchList = () => {
    setIsLoading(true);
    JobServices.getAllJobs()
      .then((res) => {
        setIsLoading(false);
        setJobs(res.data);
        console.log(res.data, ">>>>>>DATA")
      })
      .catch((err) => {
        console.log('Fetch List Error: ', err);
      });
  };

  const getFilterJobs = (filterString) => {
    JobServices.getFilteredJobs(filterString)
      .then((res) => {
        setJobs(res.data);
      })
      .catch((error) => {
        console.log('Filter Fetch Failed: ', error);
      });
  };

  const renderColumns = () => {
    const columns = [
      'Job Title',
      'Company',
      'Level',
      'Occupancy',
      'Apply Due Date',
      'Action',
    ];
    return columns.map((key, index) => {
      return <th key={index}>{key}</th>;
    });
  };

  const onDeleteJob = (event) => {
    JobServices.deleteJob(event.target.id)
      .then(res => {
        console.log('Delete Fetch Complete: ', res);
        getFetchList();
      })
      .catch(err=> {
        console.log('Delete Fetch Failure: ', err);
      })
  }

  const renderBody = () => {
    return currentJobs.map(job => {
      return (
        <tr key={job._id}>
          <td>{job.job_title}</td>
          <td>{job.company}</td>
          <td>{job.level}</td>
          <td>{job.occupancy}</td>
          <td>{moment(job.due_date).format('YYYY-MM-DD')}</td>
          <td style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to={`/edit/${job._id}`}>
              <Button style={{ margin: '0.5rem' }}>Edit</Button>
            </Link>
            <Button
              style={{ margin: '0.5rem' }}
              variant='danger'
              id={job._id}
                onClick={onDeleteJob}
            >
              Delete
            </Button>
          </td>
        </tr>
      );
    });
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div>
      {isLoading ? (
        <Spinner animation='border' role='status'>
          <span className='sr-only'>Loading...</span>
        </Spinner>
      ) : (
        <>
          <h1 id='listTitle'>Job List</h1>
          <Table striped bordered hover>
            <thead>
              <tr>{renderColumns()}</tr>
            </thead>
            <tbody>{jobs && renderBody()}</tbody>
          </Table>
          <PaginationPage jobsPerPage={jobsPerPage} totalJobs={jobs.length} paginate={paginate} currentPage={currentPage}/>
        </>
      )}
    </div>
  );
}

export default JobList;
