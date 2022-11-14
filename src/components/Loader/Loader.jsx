import { Circles } from 'react-loader-spinner';
import { Container } from './Loader.styled';

export const Loader = () => {
  return (
    <Container>
      <Circles
        height="150"
        width="150"
        color="#722620"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </Container>
  );
};
