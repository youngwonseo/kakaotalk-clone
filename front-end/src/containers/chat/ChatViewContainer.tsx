import React, { useEffect, useState, useContext } from 'react';

import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import ChatModalTemplate from '../../components/template/ChatModalTemplate';
import ChatView from '../../components/chat/ChatView';
import { RootState } from '../../modules';
import { changeField, sendMessage } from '../../modules/chat';
import { loadProfile } from '../../modules/profile';
import { ModalContext } from '../../lib/createModalProvider';


// 모달에서 열림

interface Props {};


const ChatViewContainer : React.FC<Props> = () => {
  const { openModal, closeModal } = useContext(ModalContext);
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
  } = useSelector((state: RootState) => ({
    profile: state.profile.profile,
    chat: state.chat.chat,
    chats: state.chat.chats, 
    users: state.chat.users,
    // 작성중인 채팅
    message: state.chat.message,
  }), shallowEqual);



  useEffect(() => {
    // chat 이없으면 방없음 
    // 채팅목록에서 채팅 선택

    // 챗이 존재하면 챗이 있음
    if (chat && chats) {
        const idx = chats.findIndex((_chat: any) => {
          return _chat._id === chat;
        });
        setChatIdx(idx);
    }

    return () => {
      // 초기화
    }
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
  }



  // 페이징으로 메세지 가져오기
  const handleGetMessages = () => {

  }

  const handleCloseModal = () => {
    closeModal();
  }

  return (
    <ChatModalTemplate>
      <ChatView
        message={message}
        messages={chats && chats[chatIdx] && chats[chatIdx].messages}
        handleChangeMessage={handleChangeMessage}
        handleSendMessage={handleSendMessage}
        handleCloseModal={handleCloseModal}
      />
    </ChatModalTemplate>
  );
}

export default ChatViewContainer;