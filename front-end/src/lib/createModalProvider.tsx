import React, { createContext, useState } from 'react';
import styled from 'styled-components';
import ProfileSearch from '../components/profile/ProfileSearch';
import {
  PROFILE_UPDATE_MODAL,
  MY_PROFILE_MODAL,
  FOLLOWING_PROFILE_MODAL,
  PROFILE_SEARCH_MODAL,
  CHAT_MODAL
} from '../lib/ModalContent';
import DefaultComponent from './DefaultComponent';




import MyProfileContainer from '../containers/profile/MyProfileContainer';
import FollowingProfileContainer from '../containers/profile/FollowingProfileContainer';
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
          {contentId === MY_PROFILE_MODAL && <MyProfileContainer />}
          {contentId === PROFILE_SEARCH_MODAL && <ProfileSearchContainer />}
          {contentId === FOLLOWING_PROFILE_MODAL && <FollowingProfileContainer />}
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