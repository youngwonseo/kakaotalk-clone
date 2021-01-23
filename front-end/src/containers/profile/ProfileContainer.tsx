import React, { useContext, useEffect } from 'react';
import io from 'socket.io-client';

import ProfileList from '../../components/profile/ProfileList';
import ProfileItem from '../../components/profile/ProfileItem';
import { ModalContext } from "../../lib/createModalProvider";
import { useDispatch, useSelector } from 'react-redux';
import { loadProfile, setFollowingId } from '../../modules/profile';
import { RootState } from '../../modules';
import { PROFILE_UPDATE_MODAL, MY_PROFILE_MODAL, PROFILE_SEARCH_MODAL, FOLLOWING_PROFILE_MODAL } from '../../lib/ModalContent';
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

  

  
  const { openModal, closeModal } = useContext(ModalContext);

  const handleProfileUpdate = () => {
    //setSelectedFollowing;
    openModal(MY_PROFILE_MODAL);
  }
  const handleSearch = () => {
    openModal(PROFILE_SEARCH_MODAL);
  }

  
  const handleFollowingSelect = (id: string) => {   
    dispatch(setFollowingId(id));
    openModal(FOLLOWING_PROFILE_MODAL);
  }

  // 추가된 친구에서 검색
  return (
    <>
      <ProfileItem profile={profile} handleSelect={handleProfileUpdate}/>
      <a onClick={handleSearch}>검색</a>
      <ProfileList title={"친구"} profiles={profile && profile.following} handleFollowingSelect={handleFollowingSelect} />
    </>
  );
}

export default ProfileContainer;