import client from "./client";



export const loadChats = () => client.get('/api/chats');

export const registerChat = () => client.post('/api/chats');

export const updateChat = () => client.put('/api/chats');

export const deleteChat = () => client.delete('/api/chats');