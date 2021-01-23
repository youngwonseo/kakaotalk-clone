import React from 'react';
import styled from 'styled-components';
import Input from '../common/Input';

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
  isEditMode: boolean;
  handleChange: any;
  handleChangeMode: any;
  handleSubmit: any;
}
const MyProfile: React.FC<Props> = ({ profile, isEditMode, handleChange, handleChangeMode, handleSubmit }) => {
  return (
    <MyProfileWrapper>
      {isEditMode && (
        <>
          <form onSubmit={handleSubmit}>
            <CompleteButton onClick={handleSubmit}>완료</CompleteButton>
            <ProfileImg src={profile.profileImg} />
            <Input name="username" type="text" value={profile.username} onChange={handleChange}/>
            <Input name="stateMessage" type="text" value={profile.stateMessage} onChange={handleChange}/>
          </form>
        </>
      )}

      {!isEditMode && (
        <>
          <CompleteButton onClick={handleChangeMode}>편집</CompleteButton>
          <ProfileImg src={profile.profileImg} />
          <UsernameText>{profile.username}</UsernameText>
          <StateMessageText>{profile.stateMessage}</StateMessageText>
        </>
      )}
    </MyProfileWrapper>
  );
};

export default MyProfile;