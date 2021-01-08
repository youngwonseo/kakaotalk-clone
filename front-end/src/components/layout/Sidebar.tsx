import React from 'react';
import styled from 'styled-components';

const SidebarWrapper = styled.div`
  width: 100px;
  display: flex;
  background-color: #0000ff;
`;

interface Props {};


const Sidebar : React.FC<Props> = () => {
  return (<SidebarWrapper>Sidebar</SidebarWrapper>);
}

export default Sidebar;