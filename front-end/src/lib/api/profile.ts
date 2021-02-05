import axios from 'axios';

export const loadProfile = () => axios.get('/api/profiles');

export const updateProfile = ({
  username,
  stateMessage,
}: {
  username: string;
  stateMessage: string;
}) => {
  const result = axios.post("/api/profiles", { username, stateMessage });
  console.log(result);
  return result;
}



export const registerFollowing = ({
  username,
  user,
}: {
  username: string;
  user: string;
}) => {
  return axios.post("/api/profiles/following", { username, user });
}

export const updateFollowing = ({
  id,
  username,
}: {
  id: string;
  username: string;
}) => {
  const result = axios.post(`/api/profiles/following/${id}`, { username });
  console.log(result);
  return result;
};



export const deleteFollowing = () => axios.delete("/api/profiles/following");


export const searchById = (id: string) =>
axios.get(`/api/profiles/${id}`);

export const searchByEmail = (email: string) =>
axios.get(`/api/profiles/email/${email}`);