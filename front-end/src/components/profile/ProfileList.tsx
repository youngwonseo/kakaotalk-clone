import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';

import ProfileItem from './ProfileItem';
import {  NavLink } from 'react-router-dom';
import { ModalContext } from "../../lib/createModalProvider";


const Title = styled.div`

`;


interface Props {
  title: string;
  profiles: any[];
  handleFollowingSelect: any;
};

const ProfileList: React.FC<Props> = ({
  title,
  profiles,
  handleFollowingSelect,
}) => {
  

  useEffect(() => {
    return () => {
      // console.log(.pageYOffset);
    };
  }, []);

  return (
    <>
      <Title>{title}</Title>
      {!profiles && 'loading...'}
      {profiles && profiles.map((profile: any) => (
        <div >
          {/* 친구의 경우 profile.username으로 표시 */}
          <ProfileItem key={profile.idx} profile={profile.user} handleSelect={handleFollowingSelect} />
        </div>
      ))}
    </>
  );
};

export default ProfileList;