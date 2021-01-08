import React from 'react';
import styled from 'styled-components';

const ChatTemplateWrapper = styled.div`

`;


interface Props {
  title: string;
};


const ChatTemplate : React.FC<Props> = ({ title, children }) => {
  return <ChatTemplateWrapper>{children}</ChatTemplateWrapper>;
}

export default ChatTemplate;