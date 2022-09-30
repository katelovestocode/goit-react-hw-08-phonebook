import React, { Component } from 'react';
import { Box } from '../Box';
import ContactForm from "../ContactForm/ContactForm"
import ContactList from "../ContactList/ContactList"
import Filter from "../Filter/Filter"
import {Title} from "./App.styled"
import { nanoid } from 'nanoid'



class App extends Component {
state = {
  contacts: [],
  filter: '',
  }
  

  handleSubmit = ({id, name, number}) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    }

   const dublicateContact = this.checkDublicateContact(contact, this.state.contacts);
  
    dublicateContact ? alert(`${contact.name} is already in contacts`) : this.setState(prevState => ({ contacts: [contact, ...prevState.contacts] }))
    
  }

  checkDublicateContact = (contact, contactsList) => {
    return contactsList.find(item => item.name.toLowerCase() === contact.name.toLowerCase()
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({contacts: prevState.contacts.filter(contact => contact.id !== contactId)}))
  }

  changeFilter = (event) => {this.setState({filter: event.currentTarget.value}) }
  
  getVisibleContacts = () => {
     const normalizedFilter = this.state.filter.toLowerCase()
    return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
  }
 
  render() {

    const visibleContacts = this.getVisibleContacts();

    return (

      <Box display="flex" flexDirection="row" alignItems='center'  justifyContent="space-between"  p={30} as="main">

        <Title> Phonebook </Title>
        <ContactForm onSubmitingForm={this.handleSubmit} /> 

        <Filter value={this.state.filter} onChange={this.changeFilter} />
       
        <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact} />
      </Box>
    )
  }

};

export default App;