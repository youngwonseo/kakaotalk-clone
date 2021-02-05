import axios from 'axios';

export const checkUsernameExists = (email: string) =>
axios.get("/api/auth/exists/email/" + email);

export const login = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => axios.post("/api/auth/login", { email, password });

export const register = ({
  username,
  email,
  password,
}: {
  username: string;
  email: string;
  password: string;
}) => axios.post("/api/auth/register", { username, email, password });

export const check = () => axios.get("/api/auth/check");

export const logout = () => axios.post("/api/auth/logout");
