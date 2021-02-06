import React, { useContext } from 'react';
import styled from 'styled-components';
import { ModalContext } from '../../lib/createModalProvider';

import { IoCloseOutline } from 'react-icons/io5';

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0.5rem;
`;

const ModalHeader = styled.div`
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
      {children}
    </ModalWrapper>
  );
};

export default ProfileModalTemplate;