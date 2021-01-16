import React from 'react';
import UserTemplate from '../components/template/UserTemplate';
import ProfileContainer from '../containers/profile/ProfileContainer';
import { Route, Link } from "react-router-dom"

interface Props {
  match: any;
};


const ProfilePage : React.FC<Props> = ({ match }) => {
  return (
    <UserTemplate title={"친구"}>
      <ProfileContainer />
    </UserTemplate>
  );
}

export default ProfilePage;