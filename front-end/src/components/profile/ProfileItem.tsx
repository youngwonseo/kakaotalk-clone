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
  padding: 5px 2px;
`;

const ProfileName = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

const ProfilelastMessage = styled.div`

`;

interface Props {
  id: string;
  username: string;
  stateMessage: string;
  handleProfileOpen: any;
};

const ProfileItem : React.FC<Props> = ({ id, username, stateMessage, handleProfileOpen }) => {
  return (
    <ProfileItemWrapper onClick={()=>{
      handleProfileOpen(id);
    }}>
      
      <>
        <ProfileImg src={"/profile-default.png"} />
        <ProfileInfo>
          <ProfileName>{username}</ProfileName>
          <ProfilelastMessage>{stateMessage}</ProfilelastMessage>
        </ProfileInfo>
      </>
      
    </ProfileItemWrapper>
  );
}

export default ProfileItem;