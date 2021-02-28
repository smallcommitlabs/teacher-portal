import { CognitoUser } from '@aws-amplify/auth';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import CompleteSignup from './CompleteSignup';
import Login from './Login';

const Auth: React.FC = () => {
  const [user, setUser] = useState<CognitoUser>();

  const selector = (state: RootState) => state.auth.mustCompleteSignup;
  const shouldShowCompleteSignup = useSelector(selector);

  // Render login screen by default, unless should show complete signup screen
  return (
    <Container fluid>
      <Row className={'mt-5 justify-content-center min-vh-100'}>
        <Col xs={12} sm={8} md={6} xl={3}>
          <div className={'mb-5'}>
            <h1>Spellcard</h1>
            <p>Teacher portal</p>
          </div>
          {!shouldShowCompleteSignup || !user ? (
            <Login setUser={setUser} />
          ) : (
            <CompleteSignup user={user} />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
