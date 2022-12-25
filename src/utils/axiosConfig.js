import axios from "axios";
// interceptor axios

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,
    // timeout: 1000,
    headers: {
        "Content-Type" : "application/json"
    }
  });

export default instance;