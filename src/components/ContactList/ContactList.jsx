import React from 'react';
import { List, ListItem, Button, Text, Span } from "./ContactList.styled"
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/contacts/contactsSlice';

const ContactList = () => {
  
  const dispatch = useDispatch();
  
  const contacts = useSelector(state => state.contacts.array);
  const filter = useSelector(state => state.filter);


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
      (<ListItem key={id}> <Text> <Span> {name} </Span>: {number}</Text>
        <Button onClick={() => deleteContact(id)}> Delete </Button>
      </ListItem>))}
    </List>
  )
}

export default ContactList;

