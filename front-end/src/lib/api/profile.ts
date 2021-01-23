import client from "./client";

export const loadProfile = () => client.get('/api/profiles');

export const updateProfile = ({
  username,
  stateMessage,
}: {
  username: string;
  stateMessage: string;
}) => client.post("/api/profiles", { username, stateMessage });



export const registerFollowing = ({
  username,
  user,
}: {
  username: string;
  user: string;
}) => {
  return client.post("/api/profiles/following", { username, user });
}

export const updateFollowing = () => client.put("/api/profiles/following");

export const deleteFollowing = () => client.delete('/api/profiles/following');



export const search = (email: string) =>
  client.get(`/api/profiles/email/${email}`);