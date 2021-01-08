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
  profile: any;
};

const ProfileItem : React.FC<Props> = ({ profile }) => {
  return (
    <ProfileItemWrapper>
      <ProfileImg src={profile.img} />
      <ProfileInfo>
        <ProfileName>{profile.name}</ProfileName>
        <ProfilelastMessage>{profile.lastMessage}</ProfilelastMessage>
      </ProfileInfo>
    </ProfileItemWrapper>
  );
}

export default ProfileItem;