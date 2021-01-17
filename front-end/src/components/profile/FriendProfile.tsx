import React from 'react';
import styled from 'styled-components';

const FriendProfileWrapper = styled.div`
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

const ChatButton = styled.button`
  position: absolute;
  bottom: 20px;
  left: 20px;
`;

const UsernameText = styled.div``;
const StateMessageText = styled.div``;


interface Props{
  profile: any;
  handleToChat: any;
}
const FriendProfile: React.FC<Props> = ({ profile, handleToChat }) => {
  return (
    <FriendProfileWrapper>
      <CompleteButton>완료</CompleteButton>
      <ProfileImg src={profile.profileImg}/>
      <UsernameText>{profile.username}</UsernameText>
      <StateMessageText>{profile.friend.stateMessage}</StateMessageText>

      <ChatButton onClick={handleToChat}>채팅</ChatButton>
    </FriendProfileWrapper>
  );
};

export default FriendProfile;