import React from 'react';
import styled from 'styled-components';



const ChatItemWrapper = styled.div`
  display: flex;
  padding: 3px 0px;
`;



const ChatImg = styled.img`
  border-radius: 50%;
  height: 64px;
  width: 64px;
`;

const ChatInfo = styled.div`
  padding: 5px 2px;
`;

const ChatTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

const ChatLastMessage = styled.div`

`;


interface Props {
  chat: any;
  handleOpenChat: any;
};


const ChatItem : React.FC<Props> = ({ chat, handleOpenChat }) => {
  return (
    <ChatItemWrapper onClick={()=>{
      handleOpenChat(chat._id);
    }}>
      <ChatImg src={chat.img} />
      <ChatInfo>
        <ChatTitle>{chat.title}</ChatTitle>
        <ChatLastMessage>{chat.messages[chat.messages.length-1].contents}</ChatLastMessage>
      </ChatInfo>
    </ChatItemWrapper>
  );
}

export default ChatItem;