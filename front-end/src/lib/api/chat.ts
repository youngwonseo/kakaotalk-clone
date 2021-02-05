import axios from 'axios';



export const loadChats = () => axios.get('/api/chats');

export const searchChatByUser = (id: string) =>
axios.get(`/api/chats/userid/${id}`);

// export const registerChat = ({ users, message }: { users: [], message: string }) =>
//   client.post("/api/chats", { users, message });

// export const updateChat = () => client.put('/api/chats');

// export const deleteChat = () => client.delete('/api/chats');