import React from 'react';
import PropTypes from 'prop-types';
import {List, ListItem, Button, Text, Span} from "./ContactList.styled"

const ContactList = ({ contacts, onDeleteContact }) => (
    
    <List> 
        {contacts.map(({ id, name, number }) =>
        (<ListItem key={id}> <Text> <Span> {name} </Span>: {number}</Text>
        <Button onClick={() => onDeleteContact(id)}> Delete </Button>
        </ListItem>))}
    </List>
)

export default ContactList;

ContactList.propTypes = {
    onDeleteContact: PropTypes.func.isRequired,
    
    contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

