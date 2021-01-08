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
};

const ProfileList: React.FC<Props> = ({ title, profiles }) => {
  
  const { openModal, closeModal } = useContext(ModalContext);

  useEffect(()=>{

      return ()=>{
        // console.log(.pageYOffset);
      }
  },[]);

  return (
    <>
      <Title>{title}</Title>
      {profiles.map((profile: any) => (
        <div onClick={openModal}>
        <ProfileItem key={profile.idx} profile={profile}/>
        </div>
      ))}
    </>
  );
};

export default ProfileList;