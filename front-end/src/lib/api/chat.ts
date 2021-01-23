import client from "./client";



export const loadChats = () => client.get('/api/chats');

export const searchChatByUser = ({ userid }: { userid: string }) =>
  client.get(`/api/chats/userid/${userid}`);

export const registerChat = ({ users, message }: { users: [], message: string }) =>
  client.post("/api/chats", { users, message });

export const updateChat = () => client.put('/api/chats');

export const deleteChat = () => client.delete('/api/chats');