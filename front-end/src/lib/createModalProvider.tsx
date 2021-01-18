import React, { createContext, useState } from 'react';
import styled from 'styled-components';
import ProfileSearch from '../components/profile/ProfileSearch';
// import ContentMap from '../lib/ModalContent';
import DefaultComponent from './DefaultComponent';


import MyProfileContainer from '../containers/profile/MyProfileContainer';
import FriendProfileContainer from '../containers/profile/FriendProfileContainer';
import ProfileSearchContainer from '../containers/profile/ProfileSearchContainer';
import ChatViewContainer from '../containers/chat/ChatViewContainer';

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
  width: 100%;
    height: 100%;
`;

const Container = styled.div`
  /* margin: 40px auto 0px; */
  /* padding: */
  background-color: white;
  width: 100%;
    height: 100%;
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




const ModalProvider = ({ contentsMap, children }: { contentsMap: any, children: React.ReactNode }) => {
  
  const [showModal, setShowModal] = useState<boolean>(false)
  // const [Content, setContent] = useState<React.FC>(DefaultComponent);
  let Content = DefaultComponent;
  const openModal = (contentId: string) => {
    // setContent(contentsMap[contentId]);
    Content = contentsMap[contentId];
    console.log(Content);
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {showModal && Content && (
        <Modal>
          {/* <MyProfileContainer/> */}
          <ChatViewContainer/>
          {/* <div>
            <a onClick={closeModal}>닫기</a>
          </div> */}
        </Modal>
      )}
    </ModalContext.Provider>
  );
};

export default ModalProvider;