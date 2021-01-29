import React, { useContext, useEffect } from 'react';
import io from 'socket.io-client';

import ProfileList from '../../components/profile/ProfileList';
import ProfileItem from '../../components/profile/ProfileItem';
import { ModalContext } from "../../lib/createModalProvider";
import { useDispatch, useSelector } from 'react-redux';
import { loadProfile, searchProfileById, setUpdateProfile } from '../../modules/profile';
import { RootState } from '../../modules';
import { PROFILE_SEARCH_MODAL, PROFILE_MODAL } from '../../lib/ModalContent';
import axios from 'axios';


interface Props {};

// 컨테이너 또는 컴포넌트 조합
const ProfileListContainer : React.FC<Props> = () => {
  
  const dispatch = useDispatch();

  const {
    profile,
    error,
  } = useSelector(
    (state: RootState) => ({
      profile: state.profile.profile,
      error: state.profile.error,
    })
  );

  useEffect(()=>{
    // 내정보
    dispatch(loadProfile.request());
    console.log(axios.defaults.headers);
    // 친구정보
    // dispatch(loadFriends.request());
    
  },[dispatch]);


  
  const { openModal, closeModal } = useContext(ModalContext);

  const handleSearchOpen = () => {
    openModal(PROFILE_SEARCH_MODAL);
  }

  const handleProfileOpen = () => {

 

    //내아이디인지 상대방 아이디인지?
    dispatch(setUpdateProfile({
      id: profile._id,
      username: profile.username,
      profileImg: profile.stateMessage ||'',
      stateMessage: profile.stateMessage || '',
    }));

    // 선택한 프로필의 id 또는 idx
    // 해당 id로 조회?
    // 목적
    // dispatch(searchProfile.request(id));   
    openModal(PROFILE_MODAL);   
  }


  const handleFollowingOpen = (id: string) => {
    
    const idx = profile.following.findIndex((following: any) => following._id === id);
    
    console.log(idx)
    dispatch(setUpdateProfile({
      id: profile.following[idx]._id,
      username: profile.following[idx].username,
      profileImg: profile.following[idx].user.username || '',
      stateMessage: profile.following[idx].user.stateMessage || '',
      userid: profile.following[idx].user._id
    }));


    //내아이디인지 상대방 아이디인지?

    // 선택한 프로필의 id 또는 idx
    // 해당 id로 조회?
    // 목적
    // dispatch(loadFollowing.request(id));   
    openModal(PROFILE_MODAL);   
  }



  return (
    <ProfileList
      profile={profile}
      handleSearchOpen={handleSearchOpen}
      handleProfileOpen={handleProfileOpen}
      handleFollowingOpen={handleFollowingOpen}
      error={error}
    />
  );
}

export default ProfileListContainer;