import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: absolute;
  background-color: #ff0000;
  bottom: 0px;
  width: 100%;
  height: 100%;
`;

interface Props{};

const Modal: React.FC<Props> = () => {
  return <ModalWrapper></ModalWrapper>;
};

export default Modal;



