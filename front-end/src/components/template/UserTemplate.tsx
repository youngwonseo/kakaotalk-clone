import React from 'react';
import styled from 'styled-components';

import Header from '../layout/Header';
import Navigation, { NavigationButton } from '../layout/Navigation';


const UserTemplateWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* justify-content: center;
  align-items: center; */
`;


const Contents = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;


interface Props {
  title: string;
};


const UserTemplate : React.FC<Props> = ({ title, children }) => {
  return (
    <UserTemplateWrapper>
      <Header title={title} />
      <Contents>
        {children}
      </Contents>
      <Navigation>
        <NavigationButton to="/">Profile</NavigationButton>
        <NavigationButton to="/chat">chat</NavigationButton>
        <NavigationButton to="/setting">setting</NavigationButton>
      </Navigation>
    </UserTemplateWrapper>
  );
}

export default UserTemplate;