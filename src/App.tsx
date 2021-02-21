import React from 'react';
import { Alert, Button, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import DevOnly from './components/DevOnly';
import { toggle } from './redux/stateSlice/StateSlice';
import { RootState, useAppDispatch } from './redux/store';

const App = () => {
  const dispatch = useAppDispatch();

  const selector = (state: RootState) => state.state;

  const store = useSelector(selector);

  return (
    <Container className='App'>
      <h1>Spellcard Teacher Portal</h1>
      <DevOnly>
        <Alert variant={'info'}>You are in development mode</Alert>
      </DevOnly>

      <Button onClick={() => dispatch(toggle())}>Click</Button>
      <br />
      {store.toggle ? 'On' : 'Off'}
    </Container>
  );
};

export default App;
