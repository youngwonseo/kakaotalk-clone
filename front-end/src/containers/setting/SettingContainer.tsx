import React from 'react';
import Setting from '../../components/setting/Setting';
import { withRouter, RouteComponentProps } from 'react-router-dom';


interface Props extends RouteComponentProps{};

const SettingContainer: React.FC<Props> = ({ history }) => {

  const handleLogout = () => {
    localStorage.removeItem('token');
    history.push('/login');
  }

  return <Setting handleLogout={handleLogout} />;
}

export default withRouter(SettingContainer);