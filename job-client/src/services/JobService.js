import axios from "axios";

const getAllJobs = async () => {
    return await axios.get("/jobs");
}

const getFilteredJobs = async (filterString) => {
    return await axios.get(`/search/${filterString}`)
};


const getSingleJob = async (id) => {
    return await axios.get(`/jobs/${id}`);
}

const createJob = async (entity) => {
    return await axios.post(`/jobs/new`, entity);
};

const updateJob = async (id, entity) => {
    return await axios.put(`/jobs/${id}`, entity);
};

const deleteJob = async (id) => {
    return await axios.delete(`/jobs/${id}`);
};

const JobServices = {
    getAllJobs,
    getSingleJob,
    createJob,
    updateJob,
    deleteJob,
    getFilteredJobs
}

export default JobServices;