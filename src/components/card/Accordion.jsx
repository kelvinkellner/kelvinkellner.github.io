import { Container } from 'react-bootstrap';

const CardStack = ({ children, ...rest }) => {
  return (
    <Container className="accordion" {...rest}>
      {children}
    </Container>
  );
};

export default CardStack;
