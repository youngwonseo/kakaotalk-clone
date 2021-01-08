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
};


const ChatItem : React.FC<Props> = ({ chat }) => {
  return (
    <ChatItemWrapper>
      <ChatImg src={chat.img} />
      <ChatInfo>
        <ChatTitle>{chat.title}</ChatTitle>
        <ChatLastMessage>{chat.lastMessage}</ChatLastMessage>
      </ChatInfo>
    </ChatItemWrapper>
  );
}

export default ChatItem;