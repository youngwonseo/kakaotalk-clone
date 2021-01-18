import React from 'react';
import styled from 'styled-components';

const MessageWrapper = styled.div`

`;


interface Props {message: any;};


const Message: React.FC<Props> = ({ message }) => {
  return <MessageWrapper>{message.contents}</MessageWrapper>;
};

export default Message;