import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';

import ProfileItem from './ProfileItem';
import {  NavLink } from 'react-router-dom';
import { ModalContext } from "../../lib/createModalProvider";


const ProfileListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0.5rem;
`;

const ToolBar = styled.div`
  display: flex;
  justify-content: space-between;
`;


const NoData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

interface Props {
  profile: any;
  following: any;
  handleSearchOpen: any;
  handleProfileOpen: any;
  handleFollowingOpen: any;
  error: any;
};

const ProfileList: React.FC<Props> = ({
  profile,
  following,
  handleSearchOpen,
  handleProfileOpen,
  handleFollowingOpen,
  error,
  // handleFollowingSelect,
}) => {
  

  useEffect(() => {
    return () => {
      // console.log(.pageYOffset);
    };
  }, []);

  return (
    <ProfileListWrapper>
      {!profile && "loading..."}
      {/* 내 프로필 */}
      {profile && (
        <ProfileItem
          key={profile._id}
          id={profile._id}
          username={profile.username}
          stateMessage={profile.stateMessage}
          handleProfileOpen={handleProfileOpen}
        />
      )}
      <ToolBar>
        <div>
          친구
          {following && following.length}
        </div>
        
      </ToolBar>
      {/* 친구 프로필 */}
      {following && following.length === 0 && (
        <NoData>등록된 친구가 없습니다.</NoData>
      )}
      {following &&
        following.map((following: any) => (
          <ProfileItem
            key={following._id}
            id={following._id}
            username={following.username}
            stateMessage={following.user.stateMessage}
            handleProfileOpen={handleFollowingOpen}
          />
        ))}
    </ProfileListWrapper>
  );
};

export default ProfileList;