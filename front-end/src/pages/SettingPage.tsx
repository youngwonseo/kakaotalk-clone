import React from 'react';
import UserTemplate from '../components/template/UserTemplate';

interface Props {};


const SettingPage : React.FC<Props> = () => {
  return <UserTemplate title={"세팅"}></UserTemplate>;
}

export default SettingPage;