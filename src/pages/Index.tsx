import React from 'react';
import { Alert, Container } from 'react-bootstrap';
import DevOnly from '../components/DevOnly';

const Index: React.FC = () => (
  <Container>
    <h1>Welcome</h1>
    <DevOnly>
      <Alert variant={'info'}>The app is running in developer mode</Alert>
    </DevOnly>
  </Container>
);

export default Index;
