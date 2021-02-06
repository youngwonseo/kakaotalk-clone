import React from 'react';
import UserTemplate from '../components/template/UserTemplate';
import ProfileListContainer from '../containers/profile/ProfileListContainer';
import { Route, Link } from "react-router-dom"
import ProfileHeaderContainer from '../containers/profile/ProfileHeaderContainer';

interface Props {
  match: any;
};


const ProfilePage : React.FC<Props> = ({ match }) => {
  return (
    <UserTemplate>
      <ProfileHeaderContainer />
      <ProfileListContainer />
    </UserTemplate>
  );
}

export default ProfilePage;