import React from 'react';
import styled from 'styled-components';

const MessageToolWrapper = styled.div`
  display: flex;
  flex-direction: row;
  left: 0px;
  bottom: 0px;
  border: 1px solid blue;

`;


const MessageForm = styled.form`
  width: 100%;
  display: flex;
`;

const MessageInputWrapper = styled.div`
  flex: 1;
`;
const MessageInput = styled.input`
  width: 100%;
`;

const SendButton = styled.button`
  display: flex;
`;

interface Props {
  message: string;
  handleChangeMessage: any;
  handleSendMessage: any;
};



const MessageTool: React.FC<Props> = ({
  message,
  handleChangeMessage,
  handleSendMessage,
}) => {
  return (    
    <MessageToolWrapper>
      <MessageForm autoComplete="off" onSubmit={handleSendMessage}>   
        {/* <MessageInputWrapper> */}
          <MessageInput
            type="text"
            name="message"
            onChange={handleChangeMessage}
            value={message}
          />
        {/* </MessageInputWrapper> */}
        <SendButton onClick={handleSendMessage}>ddd</SendButton>
      </MessageForm>
    </MessageToolWrapper>    
  );
};

export default MessageTool;