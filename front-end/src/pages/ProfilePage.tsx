import React from 'react';
import UserTemplate from '../components/template/UserTemplate';
import ProfileListContainer from '../containers/profile/ProfileListContainer';
import { Route, Link } from "react-router-dom"

interface Props {
  match: any;
};


const ProfilePage : React.FC<Props> = ({ match }) => {
  return (
    <UserTemplate title={"친구"}>
      <ProfileListContainer />
    </UserTemplate>
  );
}

export default ProfilePage;