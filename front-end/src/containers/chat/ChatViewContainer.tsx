import React, { useEffect } from 'react';

import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import ChatModalTemplate from '../../components/template/ChatModalTemplate';
import ChatView from '../../components/chat/ChatView';
import { RootState } from '../../modules';
import { changeField, addMessage } from '../../modules/chat';
import io from "socket.io-client";

// 모달에서 열림

interface Props {};


const ChatViewContainer : React.FC<Props> = () => {

  const dispatch = useDispatch();
  // 해당 채팅방 정보 가져오기
  // 서비스 워커
  let socket : any = io("/");

  const {
    // messages,
    // user
    message,
    messages,
  } = useSelector((state: RootState) => ({
    message: state.chat.message,
    messages: state.chat.messages,
  }), shallowEqual);

  useEffect(() => {
    // socket = io("/");
    
    socket.on('connect_error', (error: any)=> {
      console.log("connect_error: ", error);
    });
    socket.on('connect_timeout', (err: any) => {
      console.log("client connect_timeout: ", err);
    });

    socket.on('connect', () => {
      console.log('conection!');
    });
    socket.on('error', (error: any) => {
      console.log(error);
    });

    socket.on('fromServer', (payload: string) => {
      console.log(payload)
      dispatch(addMessage({message : { contents : payload } }));
    })

  }, [dispatch]);

  const handleChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    dispatch(changeField({ key: name, value }));
  }

  // 소켓?
  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(message);
    socket.emit("toServer", message);
  }

  // 페이징으로 메세지 가져오기
  const handleGetMessages = () => {

  }

  return (
    <ChatModalTemplate>
      <ChatView
        message={message}
        messages={messages}
        handleChangeMessage={handleChangeMessage}
        handleSendMessage={handleSendMessage}
      />
    </ChatModalTemplate>
  );
}

export default ChatViewContainer;