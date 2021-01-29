import React from 'react';
import styled from 'styled-components';


const SettingWrapper = styled.div`
  display: flex;
`;

interface Props {
  handleLogout: any;
}

const Setting: React.FC<Props> = ({ handleLogout }) => {
  return (
    <SettingWrapper>
      <a onClick={handleLogout}>로그아웃</a>
    </SettingWrapper>
  );
}

export default Setting;