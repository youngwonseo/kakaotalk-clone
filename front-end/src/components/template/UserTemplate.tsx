import React from 'react';
import styled from 'styled-components';
import Header from '../layout/Header';
import Navigation, { NavigationButton } from '../layout/Navigation';
import {
  IoPersonOutline,
  IoPersonSharp,
  IoChatbubbleOutline,
  IoChatbubbleSharp,
  IoSettingsOutline,
  IoSettingsSharp
} from "react-icons/io5";



const UserTemplateWrapper = styled.div`
  
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* justify-content: center;
  align-items: center; */
`;


const Contents = styled.div`
  height: 100%;
  overflow: auto;
  padding: 0.5rem;
`;


interface Props {
  title: string;
};


const UserTemplate : React.FC<Props> = ({ title, children }) => {
  return (
    <UserTemplateWrapper>
      
      {children}
      
      <Navigation>
        <NavigationButton to="/" icons={({ isActive } : {isActive: boolean}) =>
            isActive ? <IoPersonSharp size="100%"/> :<IoPersonOutline size="100%"/>}>
        </NavigationButton>
        <NavigationButton to="/chat" icons={({ isActive } : {isActive: boolean}) =>
            isActive ? <IoChatbubbleSharp size="100%"/> :<IoChatbubbleOutline size="100%"/>}>
        </NavigationButton>
        <NavigationButton to="/setting" icons={({ isActive } : {isActive: boolean}) =>
            isActive ? <IoSettingsSharp size="100%"/> :<IoSettingsOutline size="100%"/>}>
        </NavigationButton>
      </Navigation>
    </UserTemplateWrapper>
  );
}

export default UserTemplate;