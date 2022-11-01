import { Box } from '../Box';
import ContactForm from "../ContactForm/ContactForm"
import ContactList from "../ContactList/ContactList"
import Filter from "../Filter/Filter"
import {Title, Container, LeftBox} from "./App.styled"
import { nanoid } from 'nanoid'
import { useDispatch, useSelector } from 'react-redux';
import { addContact, removeContact} from 'redux/contacts/contactsSlice';
import { setFilter } from "../../redux/filter/filterSlice"
// import useLocalStorage from "../hooks/useLocalStorage"


export const App = () => {
  
  // const [filter, setFilter] = useState("");
  // const [contacts, setContacts] = useLocalStorage("contacts", [])

  const dispatch = useDispatch();
  
  const contacts = useSelector(state => state.contacts.array);
  const filter = useSelector(state => state.filter);

  
  const handleSubmit = ({ name, number}) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    }
    if (checkAvailableContact(contact)) {
    alert(`${contact.name} is already in contacts`)
    return;
    }
    dispatch(addContact(contact));
  }

  const checkAvailableContact = (contact) => {
    return contacts.find(item => item.name.toLowerCase() === contact.name.toLowerCase());
  }

  const deleteContact = contactId => {
    // setContacts(prevState => prevState.filter(contact => contact.id !== contactId)) 
    dispatch(removeContact(contactId));
  }

  const changeFilter = (event) => {
    dispatch(setFilter(event.currentTarget.value));
  }
  
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase()
    return contacts.filter(contact => (contact.name.toLowerCase().includes(normalizedFilter)))
  }

    const visibleContacts = getVisibleContacts();

    return (

      <Box display="flex" flexDirection="row" alignItems='center' justifyContent="space-around" p={30} as="main">
        
        <LeftBox> 
        <Title> Phonebook </Title>
        <ContactForm onSubmittingForm={handleSubmit} /> 
        </LeftBox>

        <Container> 
        <Filter value={filter} onChange={changeFilter} />
       
        <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
        </Container>
      
      </Box>
    )
  

};

