import axios from "axios";

const baseURL = 'https://atompoint-server.herokuapp.com/v1'
// const baseURL = 'http://localhost:4000/v1'

export const axiosInstance = axios.create({
  baseURL,
  // timeout: 5000
});