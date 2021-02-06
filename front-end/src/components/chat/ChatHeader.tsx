import React from 'react';
import styled from 'styled-components';
import { IoCloseOutline } from 'react-icons/io5';


const ChatHeaderWrapper = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const CancelButton = styled.a`
  position: absolute;
  top: 8px;
  left: 10px;
`;

const Title = styled.div`
  font-size: 1.2rem;
`;

interface Props {
  title: string;
  handleCloseModal: any;
}


const ChatHeader: React.FC<Props> = ({
  title,
  handleCloseModal
}) => {
  return (
    <ChatHeaderWrapper>
      <CancelButton onClick={handleCloseModal}>
        <IoCloseOutline size="1.5rem" />
      </CancelButton>
      <Title>
       {title}
      </Title>
    </ChatHeaderWrapper>
  );
}

export default ChatHeader;