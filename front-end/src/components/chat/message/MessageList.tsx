import React, { useEffect } from 'react';
import styled from 'styled-components';
import Message from './Message';
import { useDispatch } from 'react-redux';
// import { useMessages } from 'Hooks';

const MessageListWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

interface Props {
  messages: any;
};


const MessageList: React.FC<Props> = ({ messages }) => {
  const messageList: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();
  
  useEffect(()=>{    

    if(messageList.current) {
      
      // messageList.current.scrollIntoView({
      //   block: 'end'
      // });
      // console.log(messageList);
      const{scrollHeight, clientHeight} = messageList.current;
      messageList.current.scrollTop = scrollHeight - clientHeight;
      // console.log(scrollHeight, clientHeight);
      // messageList.current.scrollIntoView({ behavior: 'smooth' });
    }    
  },[messageList]);


  return (
    <MessageListWrapper ref={messageList}>
      {/* 11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/>11111<br/> */}
      {messages && messages.map((message: any) => (
        <Message key={message._id} message={message} />
      ))}
    </MessageListWrapper>
  );
};

export default MessageList;