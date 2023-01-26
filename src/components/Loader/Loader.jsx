import { Circles } from 'react-loader-spinner';
import { Container } from './Loader.styled';

export const Loader = () => {
  return (
    <Container>
      <Circles
        height="130"
        width="130"
        color="#A0AEC0"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </Container>
  );
};
