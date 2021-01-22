import React, { useContext, useEffect } from 'react';
import io from 'socket.io-client';

import ProfileList from '../../components/profile/ProfileList';
import ProfileItem from '../../components/profile/ProfileItem';
import { ModalContext } from "../../lib/createModalProvider";
import { useDispatch, useSelector } from 'react-redux';
import { loadProfile } from '../../modules/profile';
import { RootState } from '../../modules';
import { PROFILE_UPDATE_MODAL, MY_PROFILE_MODAL, PROFILE_SEARCH_MODAL } from '../../lib/ModalContent';
import axios from 'axios';


interface Props {};

// 컨테이너 또는 컴포넌트 조합
const ProfileContainer : React.FC<Props> = () => {
  
  const dispatch = useDispatch();

  const {
    profile
  } = useSelector(
    (state: RootState) => ({
      profile: state.profile.profile,
    })
  );

  useEffect(()=>{
    // 내정보
    dispatch(loadProfile.request());
    
    // 친구정보
    // dispatch(loadFriends.request());
    
  },[dispatch]);


 
  const myProfile = {
    idx: 1,
    username: "서영원",
    stateMessage: "What I cannot create, I do not understand.",
    profileImg: "/profile-default.png",
  }

  

  

  
  const { openModal, closeModal } = useContext(ModalContext);

  const handleProfileUpdate = () => {
    openModal(MY_PROFILE_MODAL);
  }
  const handleSearch = () => {
    openModal(PROFILE_SEARCH_MODAL);
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
      <ProfileList title={"친구"} profiles={profile && profile.friends} handleFriendSelect={handleFriendSelect} />
    </>
  );
}

export default ProfileContainer;