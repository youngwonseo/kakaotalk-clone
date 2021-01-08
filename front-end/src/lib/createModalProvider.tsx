import React, { createContext, useState } from 'react';
import styled from 'styled-components';


interface State{
  openModal: any;
  closeModal: any;
}




const Overlay = styled.div`
  position: absolute;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
`;

const Wrapper = styled.div`
  vertical-align: middle;
`;

const Container = styled.div`
  /* margin: 40px auto 0px; */
  /* padding: */
  background-color: white;
  /* width: 400px; */
`;


const Modal : React.FC = ({ children }) => {
  return(
    
      

      <Overlay>
      <Wrapper>
        <Container>

          {children}
        
          {/* <a onClick={onCloseModal}>닫기</a> */}
        </Container>
      </Wrapper>
    </Overlay>
   
  )
}



// Context 만들기
const ModalContext = createContext<State>({
  openModal: () => {},
  closeModal: () => {}
});
// const SampleDispatchContext = createContext<SampleDispatch | null>(null);

export { ModalContext };



const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  
  const [showModal, setShowModal] = useState<boolean>(false)

  const openModal = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      
      {children}    
      
      {showModal && <Modal><a onClick={closeModal}>닫기</a>모달</Modal>}
    </ModalContext.Provider>
  );
};

export default ModalProvider;