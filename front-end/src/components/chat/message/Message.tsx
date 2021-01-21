import React from 'react';
import styled from 'styled-components';

const MessageWrapper = styled.div`
  background: #333333;
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


// 내가 작성한 메세지? (boolean)
// 
interface Props {message: any;};


const Message: React.FC<Props> = ({ message }) => {
  return <MessageWrapper>{message.contents}</MessageWrapper>;
};

export default Message;