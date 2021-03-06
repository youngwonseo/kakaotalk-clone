import React from 'react';
import styled from 'styled-components';

const ProfileItemWrapper = styled.div`
  display: flex;
  padding: 3px 0px;
`;



const ProfileImg = styled.img`
  border-radius: 50%;
  height: 64px;
  width: 64px;
`;

const ProfileInfo = styled.div`
  padding: 0.5rem 0;
`;

const ProfileName = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

const ProfilelastMessage = styled.div`
  color: #495057;
`;

interface Props {
  id: string;
  username: string;
  stateMessage: string;
  profileImg: string;
  handleProfileOpen: any;
};

const ProfileItem : React.FC<Props> = ({ id, username, stateMessage, profileImg, handleProfileOpen }) => {
  return (
    <ProfileItemWrapper onClick={()=>{
      handleProfileOpen(id);
    }}>
      
      <>
        <ProfileImg src={profileImg} />
        <ProfileInfo>
          <ProfileName>{username}</ProfileName>
          <ProfilelastMessage>{stateMessage}</ProfilelastMessage>
        </ProfileInfo>
      </>
      
    </ProfileItemWrapper>
  );
}

export default ProfileItem;