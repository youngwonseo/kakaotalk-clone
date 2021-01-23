import React, { useEffect, useState, useContext } from 'react';
import ModalTemplate from '../../components/template/ProfileModalTemplate';
import FollowingProfile from '../../components/profile/FollowingProfile';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { withRouter, RouteComponentProps } from "react-router";
import { ModalContext } from '../../lib/createModalProvider';
import { CHAT_MODAL } from '../../lib/ModalContent';


interface Props extends RouteComponentProps {}

// 페이지로 분리?
const FollowingProfileContainer: React.FC<Props> = ({ history }) => {

  const { openModal, closeModal } = useContext(ModalContext);
  const dispatch = useDispatch();
  const [selectedFollowing, setSelectedFollowing] = useState<any>();
  const {
    profile,
    following,
    // selectFriendIdx,
    // chats,
  } = useSelector(
    (state: RootState) => ({
      profile: state.profile.profile,
      following: state.profile.following, // 선택되어 있는 친구 id
      // chats: state.chat.chats,
    })
  );


  useEffect(()=>{
    

    for(let i=0, n=profile.following.length; i<n; i++){ 
      if(profile.following[i].user && profile.following[i].user._id === following){
        setSelectedFollowing(profile.following[i]);
      }
    }
    // 선택된./.
    
    // profile.following[idx]
  },[dispatch]);



  const handleToChat = () => {
    
    // // 채팅방이 존재하는지 검사
    // for (let i = 0, n = chats.length; i < n; i++) {
    //   // chats.users.id
    // }

    // 없으면 생성
    // 채팅창 선택
    

    history.push('/chat')
    closeModal();
    openModal(CHAT_MODAL);
    
    //챗으로 이동후 해당 채팅 모달 열기
  }

  return (
    <ModalTemplate>
      {selectedFollowing && selectedFollowing.user &&
        <FollowingProfile following={selectedFollowing} handleToChat={handleToChat}/>
      }
    </ModalTemplate>
  );
}

export default withRouter(FollowingProfileContainer);