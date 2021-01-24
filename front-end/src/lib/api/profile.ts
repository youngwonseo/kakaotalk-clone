import client from "./client";

export const loadProfile = () => client.get('/api/profiles');

export const updateProfile = ({
  username,
  stateMessage,
}: {
  username: string;
  stateMessage: string;
}) => {
  const result = client.post("/api/profiles", { username, stateMessage });
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
  return client.post("/api/profiles/following", { username, user });
}

export const updateFollowing = ({
  id,
  username,
}: {
  id: string;
  username: string;
}) => {
  const result = client.post(`/api/profiles/following/${id}`, { username });
  console.log(result);
  return result;
};



export const deleteFollowing = () => client.delete("/api/profiles/following");


export const searchById = (id: string) =>
  client.get(`/api/profiles/${id}`);

export const searchByEmail = (email: string) =>
  client.get(`/api/profiles/email/${email}`);