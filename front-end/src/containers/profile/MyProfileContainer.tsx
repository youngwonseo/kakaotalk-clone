import React from 'react';
import ModalTemplate from '../../components/template/ProfileModalTemplate';
import MyProfile from '../../components/profile/MyProfile';

interface Props{}

// 페이지로 분리?
const ProfileUpdateContainer: React.FC<Props> = () => {


  // 내프로필정보 가져오기
  const profile = {
    username: "서영원",
    stateMessage: "What I cannot create, I do not understand.",
    profileImg: "/profile-default.png",
  }


  return (
    <ModalTemplate>
      <MyProfile profile={profile} />
    </ModalTemplate>
  );
}

export default ProfileUpdateContainer;