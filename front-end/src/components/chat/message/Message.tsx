import React from 'react';
import styled, {css} from 'styled-components';


interface MessageWrapperProps {
  isMyMessage? : boolean;
}

const MessageWrapper = styled.div<MessageWrapperProps>`
  /* background: #333333; */
  display: flex;

  ${props=>props.isMyMessage && css`
    flex-direction: row-reverse;
  `}
  /* flex-direction: row-reverse; */
  /* border: 1px solid black; */
  border-radius: 10px;
  
  ::after {
    border-top:15px solid #333333;
    border-left: 15px solid transparent;
    border-right: 0px solid transparent;
    border-bottom: 0px solid transparent;
    content:"";
    position:absolute;
    top:10px;
    left:-15px;
  }
`;


const ProfileImg = styled.img`
  border-radius: 50%;
  height: 64px;
  width: 64px;
`;

interface MessageInfoProps {
  isMyMessage? : boolean;
}

const MessageInfo = styled.div<MessageInfoProps>`
  display: flex;
  flex-direction: column;
  ${props=>props.isMyMessage && css`
    align-items: flex-end;
  `}
  

`;

const ProfileName = styled.div`
`;

const MessageContent = styled.div`
  border: 1px solid black;
`;

// 내가 작성한 메세지? (boolean)
// 메세지
interface Props {
  message: any;
};


const Message: React.FC<Props> = ({ message }) => {
  return (
    <MessageWrapper isMyMessage={message.isMine}>
      <ProfileImg src="/profile-default.png" />
      <MessageInfo isMyMessage={message.isMine}>
        <ProfileName>{message.user.username}</ProfileName>
        <MessageContent>{message.contents}</MessageContent>
      </MessageInfo>
    </MessageWrapper>
  );
};

export default Message;