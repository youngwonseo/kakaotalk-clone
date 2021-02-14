import React, { useContext, useEffect } from 'react';
import io from 'socket.io-client';

import ProfileList from '../../components/profile/ProfileList';
import ProfileItem from '../../components/profile/ProfileItem';
import { ModalContext } from "../../lib/createModalProvider";
import { useDispatch, useSelector } from 'react-redux';
import { loadProfile, searchProfileById, loadFollowing, setChangeProfile, setChangeFollowing } from '../../modules/profile';
import { RootState } from '../../modules';
import { PROFILE_SEARCH_MODAL, PROFILE_MODAL } from '../../lib/ModalContent';
import { loadToken } from '../../lib/clientToken';


interface Props {};

// 컨테이너 또는 컴포넌트 조합
const ProfileListContainer : React.FC<Props> = () => {
  
  const dispatch = useDispatch();

  const {
    profile,
    following,
    error,
  } = useSelector(
    (state: RootState) => ({
      profile: state.profile.profile,
      following: state.profile.following,
      error: state.profile.error,
    })
  );

  useEffect(()=>{
    
    // 내정보
    dispatch(loadProfile.request());
    dispatch(loadFollowing.request());
    // 친구정보
    
    // dispatch(loadFriends.request());
    
  },[dispatch]);


  
  const { openModal, closeModal } = useContext(ModalContext);

  const handleSearchOpen = () => {
    openModal(PROFILE_SEARCH_MODAL);
  }



  /**
   * 내아이디 클릭
   */
  const handleProfileOpen = () => {
    dispatch(setChangeProfile({
      id: profile._id,
      username: profile.username,
      profilePreview: profile.profileImages && profile.profileImages.length > 0 ? `/api/files/${profile.profileImages[0].filename}` : "/profile-default.png",
      stateMessage: profile.stateMessage || '',
    }));
    openModal(PROFILE_MODAL);
  }


  /**
   * 친구 아이디 클릭
   * @param id 
   */
  const handleFollowingOpen = (id: string) => {   
    const idx = following.findIndex((following: any) => following._id === id);
    dispatch(setChangeFollowing({
      idx: idx,
      id: following[idx]._id,
      username: following[idx].username,
      profileImg: following[idx].user.profileImg || '',
      stateMessage: following[idx].user.stateMessage || '',
      userid: following[idx].user._id
    }));
    openModal(PROFILE_MODAL);   
  }



  return (
    <ProfileList
      profile={profile}
      following={following}
      handleSearchOpen={handleSearchOpen}
      handleProfileOpen={handleProfileOpen}
      handleFollowingOpen={handleFollowingOpen}
      error={error}
    />
  );
}

export default ProfileListContainer;