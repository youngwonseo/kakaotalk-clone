import axios from 'axios';
axios.defaults.withCredentials = true;

const client = axios.create({headers: {
  'Authorization': `JWT_TOKEN ${localStorage.getItem("token")}`,
  'Content-Type': 'application/json'
}});



//set header
//client.defaults.baseURL = 'http://localhost:4000';

export default client;
