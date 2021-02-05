import axios from "axios";


export const loadToken = () => {
  const token = localStorage.getItem("token");
  // console.log("token!!", token);
  axios.defaults.withCredentials = true;
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  console.log(axios.defaults.headers.common)
};