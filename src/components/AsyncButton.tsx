import React from 'react';
import { Button, ButtonProps, Spinner } from 'react-bootstrap';

interface AsyncButtonProps extends ButtonProps {
  isLoading?: boolean;
}

const AsyncButton: React.FC<AsyncButtonProps> = ({ children, isLoading, disabled, ...props }) => (
  <Button {...props} disabled={disabled || isLoading}>
    {isLoading ? (
      <Spinner animation='border' role='status' size='sm'>
        <span className='sr-only'>Loading...</span>
      </Spinner>
    ) : (
      children
    )}
  </Button>
);

export default AsyncButton;
