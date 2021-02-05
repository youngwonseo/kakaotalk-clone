import axios from 'axios';

// axios.defaults.withCredentials = true;


console.log(localStorage.getItem("token"));
const client = axios.create({headers: {
  'Authorization': `Bearer ${localStorage.getItem("token")}`,
  'Content-Type': 'application/json'
}});


//set header
//client.defaults.baseURL = 'http://localhost:4000';

export default client;
