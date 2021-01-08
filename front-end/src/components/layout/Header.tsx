import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  height: 40px;
  display: flex;
  /* background-color: #0000ff; */
  padding: 0.5rem 0rem;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

interface Props {
  title: string;
};


const Header: React.FC<Props> = ({ title }) => {
  return (
    <HeaderWrapper>
      <Title>{title}</Title>
    </HeaderWrapper>
  );
};

export default Header;