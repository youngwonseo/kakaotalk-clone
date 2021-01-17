import React, { useContext } from 'react';
import styled from 'styled-components';
import { ModalContext } from '../../lib/createModalProvider';


const ModalWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const CloseButtom = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
`;

interface Props {}

const ProfileModalTemplate: React.FC<Props> = ({ children }) => {
  const { openModal, closeModal } = useContext(ModalContext);

  return (
    <ModalWrapper>
      <CloseButtom onClick={closeModal}>닫기</CloseButtom>
      
      {children}
      
    </ModalWrapper>
  );
};

export default ProfileModalTemplate;