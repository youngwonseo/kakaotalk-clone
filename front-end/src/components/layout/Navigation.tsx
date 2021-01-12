import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavigationWrapper = styled.div`
  height: 70px;
  display: flex;
  background-color: #0000ff;
`;

interface Props {  
};


const Navigation: React.FC<Props> = ({ children }) => {
  return <NavigationWrapper>{children}</NavigationWrapper>;
};



const Link = styled(NavLink)`
  
`;


interface ButtonProps {
  to: string;
}

export const NavigationButton: React.FC<ButtonProps> = ({children, to}) => {
  return <Link to={to}>{children}</Link>
}

export default Navigation;