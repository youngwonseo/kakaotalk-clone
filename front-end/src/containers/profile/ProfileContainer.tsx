import React, { useContext, useEffect } from 'react';
import io from 'socket.io-client';

import ProfileList from '../../components/profile/ProfileList';
import ProfileItem from '../../components/profile/ProfileItem';
import { ModalContext } from "../../lib/createModalProvider";
import { useDispatch, useSelector } from 'react-redux';
import { loadFriends } from '../../modules/profile';
import { RootState } from '../../modules';
import { PROFILE_UPDATE_MODAL } from '../../lib/ModalContent';

interface Props {};

// 컨테이너 또는 컴포넌트 조합
const ProfileContainer : React.FC<Props> = () => {
  
  const dispatch = useDispatch();
  
  const {
    friends
  } = useSelector(
    (state: RootState) => ({
      friends: state.profile.friends,
    })
  );

  useEffect(()=>{
    // 내정보


    // 친구정보
    dispatch(loadFriends.request());
    
  },[dispatch]);


 
  const myProfile = {
    idx: 1,
    username: "서영원",
    stateMessage: "What I cannot create, I do not understand.",
    profileImg: "/profile-default.png",
  }

  

  

  
  const { openModal, closeModal } = useContext(ModalContext);

  const handleProfileUpdate = () => {
    openModal(PROFILE_UPDATE_MODAL);
  }
  const handleSearch = () => {
    openModal();
  }

  //friend id
  const handleFriendSelect = (id: string) => {
    // 
    console.log(id);
    openModal();
  }

  // 추가된 친구에서 검색
  return (
    <>
      <ProfileItem profile={myProfile} handleSelect={handleProfileUpdate}/>
      <a onClick={handleSearch}>검색</a>
      <ProfileList title={"친구"} profiles={friends} handleFriendSelect={handleFriendSelect} />
    </>
  );
}

export default ProfileContainer;