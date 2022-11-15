import { Container, Title, Subtitle } from './Home.styled';

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
    </Container>
  );
}
