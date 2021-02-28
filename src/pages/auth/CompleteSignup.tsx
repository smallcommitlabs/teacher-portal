import { CognitoUser } from '@aws-amplify/auth';
import React, { useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import AsyncButton from '../../components/AsyncButton';
import { completeSignup } from '../../redux/authSlice/thunks/completeSignupThunk';
import { useAppDispatch } from '../../redux/store';

interface CompleteSignupProps {
  user: CognitoUser;
}

interface completeSignupFields {
  password: string;
  repeatPassword: string;
}

const completeSignupIdentifiers = {
  Password: 'password',
  RepeatPassword: 'repeatPassword',
};

const CompleteSignup: React.FC<CompleteSignupProps> = ({ user }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { register, errors, handleSubmit, watch } = useForm<completeSignupFields>();

  const dispatch = useAppDispatch();

  const onSubmit = async (data: completeSignupFields) => {
    setLoading(true);
    await dispatch(completeSignup({ user, password: data.password }));
    setLoading(false);
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>Welcome 😄</Card.Title>
        <Card.Text>To begin, please choose a new password </Card.Text>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              name={completeSignupIdentifiers.Password}
              type={'password'}
              ref={register({
                required: 'Please enter a password',
              })}
              isInvalid={Boolean(errors.password)}
            />
            <Form.Text className={'text-danger'}>{errors.password?.message}</Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Repeat Password</Form.Label>
            <Form.Control
              name={completeSignupIdentifiers.RepeatPassword}
              type={'password'}
              ref={register({
                required: 'Please repeat your password',
                validate: (value) => value === watch('password') || 'Passwords must match.',
              })}
              isInvalid={Boolean(errors.repeatPassword)}
            />
            <Form.Text className={'text-danger'}>{errors.repeatPassword?.message}</Form.Text>
          </Form.Group>
          <Form.Group>
            <AsyncButton isLoading={loading} type='submit' color={'primary'} block>
              Continue
            </AsyncButton>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default CompleteSignup;
