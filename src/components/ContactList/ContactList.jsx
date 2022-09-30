import React from 'react';
import {List, ListItem, Button, Text} from "./ContactList.styled"

const ContactList = ({ contacts, onDeleteContact }) => (
    
    <List> 
        {contacts.map(({ id, name, number }) =>
        (<ListItem key={id}> <Text> {name} {number}</Text>
        <Button onClick={() => onDeleteContact(id)}> Delete </Button>
        </ListItem>))}
    </List>
)

export default ContactList;