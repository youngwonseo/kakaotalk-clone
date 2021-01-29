import React, { useState, useEffect } from 'react';
import LoginForm from '../../components/auth/LoginForm';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { initializeForm, changeField, login } from '../../modules/auth';
import { withRouter, RouteComponentProps } from "react-router";

interface Props extends RouteComponentProps{};

const LoginContainer: React.FC<Props> = ({ history }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState<any>(null);
  const {
    form,
    auth,
    authError,
    // user
  } = useSelector(({ auth, user }: { auth: any; user: any }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    // user: user.user
  }), shallowEqual);

  useEffect(() => {
    dispatch(initializeForm("login"));
  }, [dispatch]);



  useEffect(()=> {

    // 로그인 성공
    if (auth) {
      // localStorage.setItem("token", auth.access_token);
      // console.log(auth.access_token)
      // console.log(localStorage.getItem("token"));
      history.push("/");
    }

    if(authError){
      
    }
  },[auth, authError]);




  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    dispatch(changeField({ form: "login", key: name, value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = form;
    dispatch(login.request({ email, password }));
  };

  
  
  return (
    <LoginForm
      form={form}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      error={error}
    />
  );
};

export default withRouter(LoginContainer);