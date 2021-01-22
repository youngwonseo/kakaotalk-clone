import React from 'react';
import AuthTemplate from '../components/template/AuthTemplate';
import LoginContainer from '../containers/auth/LoginContainer';

interface Props {};

const LoginPage : React.FC<Props> = () => {
  return (
    <AuthTemplate>
      <LoginContainer />
    </AuthTemplate>
  );
}

export default LoginPage;