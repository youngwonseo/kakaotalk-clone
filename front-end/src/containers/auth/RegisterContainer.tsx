import React, { useEffect, useState } from 'react';
import RegisterForm from '../../components/auth/RegisterForm';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { initializeForm, changeField, register } from '../../modules/auth';
import { withRouter, RouteComponentProps } from 'react-router-dom';



interface Props extends RouteComponentProps{

}


const RegisterContainer: React.FC<Props> = ({ history }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState<any>(null);
  const { form, auth, authError } = useSelector(
    ({ auth, user }: { auth: any; user: any }) => ({
      form: auth.register,
      auth: auth.auth,
      authError: auth.authError,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(initializeForm("register"));
  }, [dispatch]);

  // 가입완료 시
  useEffect(() => {
    // history.push("/login");
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    dispatch(changeField({ form: "register", key: name, value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, email, password } = form;
    dispatch(register.request({ username, email, password }));
  };

  return (
    <RegisterForm
      form={form}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      error={error}
    />
  );
};


export default withRouter(RegisterContainer);