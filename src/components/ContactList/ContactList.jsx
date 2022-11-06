import React from 'react';
import { List, ListItem, Button, Text, Span } from "./ContactList.styled"
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/operations';
import {getContacts, getStatusFilter} from "redux/selectors"

const ContactList = () => {
  
  const dispatch = useDispatch();
  
  const contacts = useSelector(getContacts);
  const filter = useSelector(getStatusFilter);


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
      (<ListItem key={id}> <Text> <Span> {name}: </Span> {number}</Text>
        <Button onClick={() => deleteContact(id)}> X </Button>
      </ListItem>))}
    </List>
  )
}

export default ContactList;

