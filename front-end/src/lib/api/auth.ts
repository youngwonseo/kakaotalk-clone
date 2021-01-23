import client from './client';

export const checkUsernameExists = (email: string) =>
  client.get("/api/auth/exists/email/" + email);

export const login = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => client.post("/api/auth/login", { email, password });

export const register = ({
  username,
  email,
  password,
}: {
  username: string;
  email: string;
  password: string;
}) => client.post("/api/auth/register", { username, email, password });

export const check = () => client.get("/api/auth/check");

export const logout = () => client.post("/api/auth/logout");
