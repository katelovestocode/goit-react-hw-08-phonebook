import React from 'react';
import { List, ListItem, Button, Text, Span, Container} from "./ContactList.styled"
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/contacts/operations';
import {selectContacts, selectStatusFilter} from "redux/contacts/selectors"

const ContactList = () => {
  
  const dispatch = useDispatch();
  
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectStatusFilter);


  const deleteContact = contactId => {
    dispatch(removeContact(contactId));
  }

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase()
    return contacts.filter(contact => (contact.name.toLowerCase().includes(normalizedFilter)))
  }

  const visibleContacts = getVisibleContacts();
  
  return (
    
    <List>
      {visibleContacts.map(({ id, name, number }) =>
      (<ListItem key={id}>
        <Container>  <Span> {name}: </Span> 
          <Text> {number}</Text> </Container>
        <Button onClick={() => deleteContact(id)}> Delete </Button> 
      
      </ListItem>))}
    </List>
  )
}

export default ContactList;

