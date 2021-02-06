import React from 'react';
import UserTemplate from '../components/template/UserTemplate';
import SettingContainer from '../containers/setting/SettingContainer';
interface Props {};


const SettingPage : React.FC<Props> = () => {
  return (
    <UserTemplate>
      <SettingContainer />
    </UserTemplate>
  );
}

export default SettingPage;