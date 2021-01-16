import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const RegisterFormWrapper = styled.div`
	padding: 0rem 3rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-items: center;
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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={form.email}
        />
        <input
          type="text"
          name="password"
          onChange={handleChange}
          value={form.password}
        />
        <button onClick={handleSubmit}>회원가입</button>
      </form>
      {error && error}
    </RegisterFormWrapper>
  );
};

export default RegisterForm;