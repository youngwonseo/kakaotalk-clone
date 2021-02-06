import React, { createContext, useState } from 'react';
import styled from 'styled-components';
import ProfileSearch from '../components/profile/ProfileSearch';
import {
  PROFILE_MODAL,
  PROFILE_SEARCH_MODAL,
  CHAT_MODAL
} from '../lib/ModalContent';
import DefaultComponent from './DefaultComponent';



import ProfileSearchContainer from '../containers/profile/ProfileSearchContainer';
import ChatViewContainer from '../containers/chat/ChatViewContainer';
import ProfileViewContainer from '../containers/profile/ProfileViewContainer';

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


const Container = styled.div`
  /* margin: 40px auto 0px; */
  /* padding: */
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;

  /* width: 400px; */
`;


const Modal : React.FC = ({ children }) => {
  return(
    
      

    <Overlay>     
      <Container>
        {children}
      </Container>
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
  const [contentId, setContentId] = useState<string>(''); 
  
  const openModal = (contentId: string) => {
    // setContent(contentsMap[contentId]);

    // Content = contentsMap[contentId];
    // console.log(contentId);
    setContentId(contentId);
    console.log(contentId);
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {showModal && (
        <Modal>
          {contentId === PROFILE_SEARCH_MODAL && <ProfileSearchContainer />}
          {contentId === PROFILE_MODAL && <ProfileViewContainer />}
          {contentId === CHAT_MODAL && <ChatViewContainer />}
          {/* <div>
            <a onClick={closeModal}>닫기</a>
          </div> */}
        </Modal>
      )}
    </ModalContext.Provider>
  );
};



export default ModalProvider;