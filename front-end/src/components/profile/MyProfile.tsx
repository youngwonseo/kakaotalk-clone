import React from 'react';
import styled from 'styled-components';

const MyProfileWrapper = styled.div`
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const ProfileImg = styled.img`
  border-radius: 20%;
  height: 64px;
  width: 64px;
`;

const CompleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const UsernameText = styled.div``;
const StateMessageText = styled.div``;


interface Props{
  profile: any;
}
const MyProfile: React.FC<Props> = ({ profile }) => {
  return (
    <MyProfileWrapper>
      <CompleteButton>완료</CompleteButton>
      <ProfileImg src={profile.profileImg}/>
      <UsernameText>{profile.username}</UsernameText>
      <StateMessageText>{profile.stateMessage}</StateMessageText>
    </MyProfileWrapper>
  );
};

export default MyProfile;