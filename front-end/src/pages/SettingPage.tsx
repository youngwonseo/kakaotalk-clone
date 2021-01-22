import React from 'react';
import UserTemplate from '../components/template/UserTemplate';
import SettingContainer from '../containers/setting/SettingContainer';
interface Props {};


const SettingPage : React.FC<Props> = () => {
  return (
    <UserTemplate title={"세팅"}>
      <SettingContainer />
    </UserTemplate>
  );
}

export default SettingPage;