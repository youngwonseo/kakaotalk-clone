import { eventChannel  } from 'redux-saga';


export function createSocketChannel(socket: any) {
  return eventChannel(emit => {
    socket.on('message', (payload: any) => {
      emit(payload);
    });
    const unsubscribe = () => {
      socket.onmessage = null;
    };
    return unsubscribe;
  });
};

export function closeChannel(channel: any) {
  if(channel) channel.close();
};