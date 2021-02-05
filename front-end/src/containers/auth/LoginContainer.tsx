import React, { useState, useEffect } from 'react';
import LoginForm from '../../components/auth/LoginForm';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { initializeForm, changeField, login } from '../../modules/auth';
import { withRouter, RouteComponentProps } from "react-router";
import axios from 'axios';

axios.defaults.withCredentials = true;

interface Props extends RouteComponentProps{};

const LoginContainer: React.FC<Props> = ({ history }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState<any>(null);
  const {
    loading,
    form,
    auth,
    authError,
    // user
  } = useSelector(({ auth, user }: { auth: any; user: any }) => ({
    loading: true,
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    // user: user.user
  }), shallowEqual);

  useEffect(() => {
    localStorage.clear();
    dispatch(initializeForm("login"));
  }, [dispatch]);



  useEffect(()=> {

    // 로그인 성공
    if (auth) {
      localStorage.setItem("token", auth.access_token);
      console.log(localStorage.getItem("token"));



      axios.defaults.withCredentials = true;
      axios.defaults.headers.common['Authorization'] = `Bearer ${auth.access_token}`;
      history.push("/");
      
      // setInterval(()=>{
      //   console.log('hi')
      //   const token = localStorage.getItem("token");
      //   if(token){
      //     console.log(token)
      //     // history.push("/");
      //   }
      // }, 1000);
      

      
      // console.log(auth.access_token)
      // console.log(localStorage.getItem("token"));
      
    }

    if(authError){
      setError(authError);
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
      loading={loading}
      form={form}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      error={error}
    />
  );
};

export default withRouter(LoginContainer);