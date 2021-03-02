import Auth from '@aws-amplify/auth';
import React from 'react';
import { Alert, Button, Container } from 'react-bootstrap';
import DevOnly from '../components/DevOnly';
import { logout } from '../redux/authSlice/thunks/logoutThunk';
import { useAppDispatch } from '../redux/store';

const Index: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <Container style={{ height: '3000px' }}>
      <h1>Welcome</h1>
      <DevOnly>
        <Alert variant={'info'}>
          The app is running in developer mode <br />{' '}
          <Button onClick={async () => console.log(await Auth.currentAuthenticatedUser())}>
            log user
          </Button>
        </Alert>
      </DevOnly>
      <Button onClick={() => dispatch(logout())}>Logout</Button>
    </Container>
  );
};

export default Index;
