import client from "./client";


export const search = (email: string) =>
  client.get(`/api/profiles/email/${email}`);