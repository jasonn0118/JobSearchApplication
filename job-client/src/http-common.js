import axios from "axios";

export default axios.create({
  baseURL: "https://jobsearch-application.herokuapp.com/",
  headers: {
    "Content-type": "application/json"
  }
});