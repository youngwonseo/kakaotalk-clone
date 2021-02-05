import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';

const NavigationWrapper = styled.div`
  height: 70px;
  display: flex;
  
  /* background-color: #f7e600; */
`;

interface Props {  
};


const Navigation: React.FC<Props> = ({ children }) => {
  return <NavigationWrapper>{children}</NavigationWrapper>;
};



const Link = styled(NavLink)`
  flex: 1;
  padding: 1rem;
`;


interface ButtonProps {
  to: string;
  icons: any;
}

export const NavigationButton: React.FC<ButtonProps> = ({ icons, to}) => {
  
  
  const location = useLocation();
  const isActive = location.pathname === to;
  // const [isActive, setIsActive] = useState<boolean>(true);

  return <Link exact to={to}>{icons({ isActive })}</Link>
}

export default Navigation;