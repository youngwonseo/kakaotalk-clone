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
  handleFriendSelect: any;
};

const ProfileList: React.FC<Props> = ({
  title,
  profiles,
  handleFriendSelect,
}) => {
  const { openModal, closeModal } = useContext(ModalContext);

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
        <div onClick={openModal}>
          <ProfileItem key={profile.idx} profile={profile} handleSelect={handleFriendSelect} />
        </div>
      ))}
    </>
  );
};

export default ProfileList;