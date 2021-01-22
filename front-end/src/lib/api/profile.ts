import client from "./client";

export const loadProfile = () => client.get('/api/profiles');

export const registerFollowing = ({
  username,
  following,
}: {
  username: string;
  following: string;
}) => client.post("/api/profiles/following", { username, following });

export const updateFollowing = () => client.put("/api/profiles/following");

export const deleteFollowing = () => client.delete('/api/profiles/following');



export const search = (email: string) =>
  client.get(`/api/profiles/email/${email}`);