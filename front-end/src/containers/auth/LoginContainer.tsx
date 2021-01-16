import React, { useState, useEffect } from 'react';
import LoginForm from '../../components/auth/LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import { initializeForm, changeField, login } from '../../modules/auth';

interface Props {};

const LoginContainer: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState<any>(null);
  const {
    form,
    auth, 
    authError,
    // user
  } = useSelector(({ auth, user }: {auth: any, user: any}) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    // user: user.user
  }));
  
  
  useEffect(() => {
    dispatch(initializeForm('login'));
  },[dispatch]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    dispatch(changeField({ form: 'login', key: name, value }));
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = form;
    dispatch(login.request({ email, password }));
  }



  return (
    <LoginForm
      form={form}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      error={error}
    />
  );
};

export default LoginContainer;