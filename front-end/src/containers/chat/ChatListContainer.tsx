import React from 'react';
import styled from 'styled-components';

import ChatList from '../../components/chat/ChatList';


interface Props {};


const ChatListContainer : React.FC<Props> = () => {

  const chats = [
    {
      idx: 1,
      title: "서영원",
      lastMessage: "Search & Learning",
      img: "/profile-default.png",
    },
    {
      idx: 2,
      title: "이영호",
      lastMessage: "Flash",
      img: "/profile-default.png",
    },
    {
      idx: 3,
      title: "김명운",
      lastMessage: "Queen",
      img: "/profile-default.png",
    },
    {
      idx: 4,
      title: "이제동",
      lastMessage: "JD",
      img: "/profile-default.png",
    },
    {
      idx: 5,
      title: "서영원",
      lastMessage: "Search & Learning",
      img: "/profile-default.png",
    },
    {
      idx: 6,
      title: "이영호",
      lastMessage: "Flash",
      img: "/profile-default.png",
    },
    {
      idx: 7,
      title: "김명운",
      lastMessage: "Queen",
      img: "/profile-default.png",
    },
    {
      idx: 8,
      title: "이제동",
      lastMessage: "JD",
      img: "/profile-default.png",
    },
    {
      idx: 9,
      title: "서영원",
      lastMessage: "Search & Learning",
      img: "/profile-default.png",
    },
    {
      idx: 10,
      title: "이영호",
      lastMessage: "Flash",
      img: "/profile-default.png",
    },
    {
      idx: 11,
      title: "김명운",
      lastMessage: "Queen",
      img: "/profile-default.png",
    },
    {
      idx: 12,
      title: "이제동",
      lastMessage: "JD",
      img: "/profile-default.png",
    },
    {
      idx: 13,
      title: "서영원",
      lastMessage: "Search & Learning",
      img: "/profile-default.png",
    },
    {
      idx: 14,
      title: "이영호",
      lastMessage: "Flash",
      img: "/profile-default.png",
    },
    {
      idx: 15,
      title: "김명운",
      lastMessage: "Queen",
      img: "/profile-default.png",
    },
    {
      idx: 16,
      title: "이제동",
      lastMessage: "JD",
      img: "/profile-default.png",
    },
  ];


  return (
    <>
      <ChatList chats={chats} />
    </>
  );
}

export default ChatListContainer;