import { CognitoUser } from '@aws-amplify/auth';
import React, { useState } from 'react';
import { Alert, Card, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import AsyncButton from '../../components/AsyncButton';
import { login } from '../../redux/authSlice/thunks/loginThunk';
import { useAppDispatch } from '../../redux/store';

interface LoginProps {
  setUser: React.Dispatch<React.SetStateAction<CognitoUser | undefined>>;
}

interface loginData {
  username: string;
  password: string;
}

interface errResponse {
  code: string;
  name: string;
  message: string;
}

const loginIdentifiers = {
  Username: 'username',
  Password: 'password',
};

const Login: React.FC<LoginProps> = ({ setUser }) => {
  const { register, handleSubmit, errors } = useForm<loginData>();
  const [serverError, setServerError] = useState<string>();
  const [loading, setLoading] = useState<boolean>();

  const dispatch = useAppDispatch();

  const onSubmit = async (data: loginData) => {
    setLoading(true);
    setServerError(undefined);

    const res = await dispatch(login({ username: data.username, password: data.password }));
    if (login.fulfilled.match(res)) {
      if ((res.payload as any).challengeName === 'NEW_PASSWORD_REQUIRED') {
        setUser(res.payload);
      }
    }
    if (login.rejected.match(res)) {
      const err = res.error as errResponse;
      if (err.code === 'NotAuthorizedException') {
        setServerError(err.message);
      }
      setLoading(false);
    }
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>Login</Card.Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              name={loginIdentifiers.Username}
              placeholder='Enter your username'
              ref={register({
                required: true,
              })}
              isInvalid={Boolean(errors.username)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type={loginIdentifiers.Password}
              name='password'
              placeholder='Enter your password'
              ref={register({
                required: true,
              })}
              isInvalid={Boolean(errors.password)}
            />
          </Form.Group>
          <Form.Group>{serverError && <Alert variant={'danger'}>{serverError}</Alert>}</Form.Group>
          <Form.Group>
            <AsyncButton isLoading={loading} type='submit' color={'primary'} block>
              Login
            </AsyncButton>
          </Form.Group>
          <Form.Group>
            <Form.Text>Forgot your password? Click here</Form.Text>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Login;
