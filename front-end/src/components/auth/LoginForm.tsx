import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Input from '../common/Input';
import Button from '../common/Button';

const LoginFormWrapper = styled.div`
	padding: 0rem 3rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-items: center;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;


interface Props {
  loading: boolean;
	form: any;
	handleChange: any;
	handleSubmit: any;
	error: any;
};


const LoginForm: React.FC<Props> = ({
  loading,
  form,
  handleChange,
  handleSubmit,
  error,
}) => {
  return (
    <LoginFormWrapper>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="email"
          onChange={handleChange}
          value={form.email}
          placeholder="이메일"
        />
        <Input
          type="text"
          name="password"
          onChange={handleChange}
          value={form.password}
          placeholder="비밀번호"
        />
        <Button onClick={handleSubmit} width="100%">
          로그인
        </Button>
      </Form>
      <Link to={"/register"}>회원가입</Link>
    </LoginFormWrapper>
  );
};

export default LoginForm;