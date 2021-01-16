import React from 'react';
import styled from 'styled-components';

const ProfileSearchWrapper = styled.div`
  display: flex;
`;


interface Props {}

const ProfileSearch: React.FC<Props> = () => {
  return <ProfileSearchWrapper>Search</ProfileSearchWrapper>;
};

export default ProfileSearch;