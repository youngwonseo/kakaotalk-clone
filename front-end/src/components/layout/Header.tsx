import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  height: 40px;
  display: flex;
  /* background-color: #0000ff; */
  /* padding: 0.5rem 0rem; */
  padding: 0.5rem;
  /* padding: 1rem; */
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const Contents = styled.div`
  
`;

interface Props {
  title: string;
};


const Header: React.FC<Props> = ({ title, children }) => {
  return (
    <HeaderWrapper>
      <Title>{title}</Title>
      <Contents>{children}</Contents>
    </HeaderWrapper>
  );
};

export default Header;