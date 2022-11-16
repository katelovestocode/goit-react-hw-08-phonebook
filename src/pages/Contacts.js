import { Box } from '../components/Box';
import ContactForm from '../components/ContactForm/ContactForm.jsx';
import ContactList from '../components/ContactList/ContactList.jsx';
import Filter from '../components/Filter/Filter.jsx';
import { Title, Container, LeftBox, Loader } from './Contacts.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      // as="main"
    >
      <LeftBox>
        <Title> Phonebook </Title>
        <ContactForm />
      </LeftBox>

      <Container>
        <Filter />
        {isLoading && !error && <Loader> Request in progress...</Loader>}
        {error && <p> {error} </p>}
        <ContactList />
      </Container>
    </Box>
  );
}
