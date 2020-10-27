import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:9000", // this was our localhost api
  baseURL: "https://tiktok-mern-backend-1.herokuapp.com/", // this is our heroku deployed API
});

export default instance;
