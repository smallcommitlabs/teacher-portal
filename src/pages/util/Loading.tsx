import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';

const Loading = () => (
  <Container fluid>
    <Row className={'align-items-center justify-content-center min-vh-100'}>
      <Spinner animation='border' role='status'>
        <span className='sr-only'>Loading...</span>
      </Spinner>
    </Row>
  </Container>
);

export default Loading;
