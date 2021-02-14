import axios from 'axios';

export const loadProfile = () => axios.get('/api/profiles');

export const updateProfile = ({
  username,
  stateMessage,
  profileImg
}: {
  username: string;
  stateMessage: string;
  profileImg: string;
}) => {
  const result = axios.put("/api/profiles", { username, stateMessage, profileImg });
  console.log(result);
  return result;
}

export const registerProfileImg = (formData: any) =>
  axios.post(`/api/files`, formData);


export const searchById = (id: string) => axios.get(`/api/profiles/${id}`);

export const searchByEmail = (email: string) =>
  axios.get(`/api/profiles/email/${email}`);