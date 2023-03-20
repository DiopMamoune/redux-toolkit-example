import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../../features/auth/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChangeEmail = (e: any) => setEmail(e.target.value);
  const handleChangePassword = (e: any) => setPassword(e.target.value);

  const handleSubmit = () => {
    dispatch(
      login({
        email,
        password,
      })
    );
    navigate("/home");
  };

  return (
    <Wrapper>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Input type="email" name="email" id="email" required onChange={handleChangeEmail} />
        <Input type="password" name="password" id="password" required onChange={handleChangePassword} />
        <Button>Se connecter</Button>
      </Form>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.button`
  background-color: #00a753;
  color: white;
  height: 40px;
  border: 0;
  padding: 0 20px;
  border-radius: 10px;
  cursor: pointer;
`;

const Input = styled.input`
  height: 30px;
  width: 350px;
  border: 1px solid black;
  border-radius: 10px;
  margin-bottom: 20px;
`;
