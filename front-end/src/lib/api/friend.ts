import client from "./client";


export const loadFriends = () => client.get('/api/friends');

export const registerFriend = ({username, friend}: {username: string, friend: string}) => client.post('/api/friends', {username, friend});

export const updateFriend = () => client.put('/api/friends');

export const deleteFriend = () => client.delete('/api/friends');