import React from 'react';
import AuthTemplate from '../components/template/AuthTemplate';
import RegisterContainer from '../containers/auth/RegisterContainer';



interface Props {};


const RegisterPage : React.FC<Props> = () => {
  return (
    <AuthTemplate>
      <RegisterContainer />
    </AuthTemplate>
  );
}

export default RegisterPage;