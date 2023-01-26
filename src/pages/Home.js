import { Container, Title, Subtitle} from './Home.styled';
import homepageImage from '../img/homepageImage2.jpg';

export default function Home() {
  return (
    <Container>
      <Title>
        Welcome to Phonebook
        <span> &#128075;</span>
      </Title>
      <Subtitle>
        Please, register or login to work with private collections of contacts.
      </Subtitle>

      <img src={homepageImage} alt="busy girl" width={600} />
    </Container>
  );
}
