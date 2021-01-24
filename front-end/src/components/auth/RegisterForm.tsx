import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Input from '../common/Input';
import Button from '../common/Button';

const RegisterFormWrapper = styled.div`
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
  form: any;
  handleChange: any;
  handleSubmit: any;
  error: any;
}

const RegisterForm: React.FC<Props> = ({
  form,
  handleChange,
  handleSubmit,
  error,
}) => {
  return (
    <RegisterFormWrapper>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="username"
          onChange={handleChange}
          value={form.username}
          placeholder="이름"
        />
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
        <Button onClick={handleSubmit}>회원가입</Button>
      </Form>
      <Link to="/login">뒤로</Link>
      {error && error}
    </RegisterFormWrapper>
  );
};

export default RegisterForm;