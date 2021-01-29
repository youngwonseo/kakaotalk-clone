import React from 'react';
import styled from 'styled-components';

const MessageWrapper = styled.div`
  /* background: #333333; */
  display: flex;
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

const MessageInfo = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex-end; * 내가작성한 메세지 flex-end */

`;

const ProfileName = styled.div`
`;

const MessageContent = styled.div`
  border: 1px solid black;
`;

// 내가 작성한 메세지? (boolean)
// 메세지
interface Props {message: any;};


const Message: React.FC<Props> = ({ message }) => {
  return (
    <MessageWrapper>
      <ProfileImg src="/profile-default.png" />

      <MessageInfo>
        <ProfileName>{message.user.username}</ProfileName>
        <MessageContent>{message.contents}</MessageContent>
      </MessageInfo>
    </MessageWrapper>
  );
};

export default Message;