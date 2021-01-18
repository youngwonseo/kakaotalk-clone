import React from 'react';
import styled from 'styled-components';

const MessageToolWrapper = styled.div`
  display: flex;
  flex-direction: column;
  left: 0px;
  bottom: 0px;
  border: 1px solid blue;
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
      <form onSubmit={handleSendMessage}>
        <input type="text" name="message" onChange={handleChangeMessage} value={message} />
      </form>
    </MessageToolWrapper>
  );
};

export default MessageTool;