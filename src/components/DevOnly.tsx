const DevOnly: React.FC = ({ children }) => (
  <>{process.env.NODE_ENV === 'development' ? children : ''}</>
);

export default DevOnly;
