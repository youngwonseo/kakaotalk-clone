import React, { useContext } from 'react';
import styled from 'styled-components';
import { ModalContext } from '../../lib/createModalProvider';


const ModalWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CloseButtom = styled.a`
  position: absolute;
  top: 10px;
  left: 10px;
`;

interface Props {}

const ChatModalTemplate: React.FC<Props> = ({ children }) => {
  const { openModal, closeModal } = useContext(ModalContext);

  return (
    <ModalWrapper>
      {children}
    </ModalWrapper>
  );
};

export default ChatModalTemplate;