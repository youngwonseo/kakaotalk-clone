import axios from 'axios';

export const loadProfile = () => axios.get('/api/following');

export const registerFollowing = ({
  username,
  user,
}: {
  username: string;
  user: string;
}) => {
  return axios.post("/api/following", { username, user });
}

export const updateFollowing = ({
  id,
  username,
}: {
  id: string;
  username: string;
}) => {
  const result = axios.put(`/api/following/${id}`, { username });
  console.log(result);
  return result;
};



export const deleteFollowing = () => axios.delete("/api/following");