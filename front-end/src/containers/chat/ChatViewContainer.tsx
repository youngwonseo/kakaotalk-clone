import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import ChatModalTemplate from '../../components/template/ChatModalTemplate';
import ChatView from '../../components/chat/ChatView';
import { RootState } from '../../modules';
import { changeField, sendMessage } from '../../modules/chat';
import { loadProfile } from '../../modules/profile';


// 모달에서 열림

interface Props {};


const ChatViewContainer : React.FC<Props> = () => {

  const dispatch = useDispatch();
  // 해당 채팅방 정보 가져오기
  // 서비스 워커
  // let socket : any = io("/");
  const [chatIdx, setChatIdx] = useState<number>(-1);
  const {
    // messages,
    // user
    profile,
    chat,
    chats,
    users,
    message,
    // messages,

  } = useSelector((state: RootState) => ({
    profile: state.profile.profile,
    chat: state.chat.chat,
    chats: state.chat.chats, 
    users: state.chat.users,
    message: state.chat.message,
    // messages: state.chat.messages,
    // following: state.profile.following,
  }), shallowEqual);


  useEffect(() => {
    // chat 이없으면 방없음 
    // 채팅목록에서 채팅 선택

    // 챗이 존재하면 챗이 있음
    if (chat && chats) {
        const idx = chats.findIndex((_chat: any) => {
          // console.log(chat._id, chat;)
          return _chat._id === chat;
        });
        console.log(idx);
        setChatIdx(idx);
    }

    if(!profile){
      dispatch(loadProfile.request());
    }
    //   // 찾기
    //   const idx = chats.findIndex((_chat: any) => {
    //     // console.log(chat._id, chat;)
    //     return _chat._id === chat;
    //   });
    //   console.log(idx);
    //   setChatIdx(idx);
    // } 
    
    // else if (following) {
    //   // 프로필에서 채팅 선택
    //   // 기존 채팅이 있는지 검색
    //   dispatch(searchChatByUser.request({ userid: following }));
    // }

  }, [dispatch, chat, chats]);



  const handleChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    dispatch(changeField({ key: name, value }));
  }




  // 소켓?
  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // following이 없으면 이미 생성된 방
    dispatch(
      sendMessage({
        chat: chat,
        user: profile._id, // 내아이디
        users: users, // ? [following] : null, //받을사람 아이디
        message: message,
      })
    );
    
    // 선택된 채팅방 아이디가 없으면 채팅방 추가
    // if (!chat) {
    //   dispatch(registerChat.request({ users : [following], message}));
    // }else{
    //   // console.log('send message!');
      
    // }
    // console.log(message);
    // socket.emit("toServer", message);
  }



  // 페이징으로 메세지 가져오기
  const handleGetMessages = () => {

  }

  return (
    <ChatModalTemplate>
      <ChatView
        message={message}
        messages={chats && chats[chatIdx] && chats[chatIdx].messages}
        handleChangeMessage={handleChangeMessage}
        handleSendMessage={handleSendMessage}
      />
    </ChatModalTemplate>
  );
}

export default ChatViewContainer;