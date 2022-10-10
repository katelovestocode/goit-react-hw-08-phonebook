import React, { Component } from 'react';
import { Box } from '../Box';
import ContactForm from "../ContactForm/ContactForm"
import ContactList from "../ContactList/ContactList"
import Filter from "../Filter/Filter"
import {Title, Container} from "./App.styled"
import { nanoid } from 'nanoid'



class App extends Component {
state = {
  contacts: [],
  filter: '',
  }
  

  handleSubmit = ({ name, number}) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    }

    this.addNewContact(contact);

    //  const dublicateContact = this.checkDublicateContact(contact, this.state.contacts);
    //   dublicateContact ? alert(`${contact.name} is already in contacts`) : 
    //   this.setState(prevState => ({ contacts: [...prevState.contacts, contact] }))
    
  }

  // checkDublicateContact = (contact, contactsList) => {
  //   return contactsList.find(item => item.name.toLowerCase() === contact.name.toLowerCase()
  //   );
  // };

  addNewContact = (contact) => {
    this.setState(prevState => prevState.contacts.find(item => item.name.toLowerCase() === contact.name.toLowerCase()) ? alert(`${contact.name} is already in contacts`) :
      {contacts: [contact, ...prevState.contacts]})
  }

  deleteContact = contactId => {
    this.setState(prevState => ({contacts: prevState.contacts.filter(contact => contact.id !== contactId)}))
  }

  changeFilter = (event) => {this.setState({filter: event.currentTarget.value}) }
  
  getVisibleContacts = () => {
     const normalizedFilter = this.state.filter.toLowerCase()
    return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
  }
 
  componentDidMount() {
    // console.log("Component Did Mount")

    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
   }
  }

  componentDidUpdate(prevProps, prevState) { 
    // console.log(prevState)
    // console.log(this.state)

    if (this.state.contacts !== prevState.contacts) {

      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }
  

  render() {

    const visibleContacts = this.getVisibleContacts();

    return (

      <Box display="flex" flexDirection="row" alignItems='center'  justifyContent="space-around"  p={30} as="main">

        <Title> Phonebook </Title>
        <ContactForm onSubmittingForm={this.handleSubmit} /> 

        <Container> 
        <Filter value={this.state.filter} onChange={this.changeFilter} />
       
        <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact} />
        </Container>
      
      </Box>
    )
  }

};

export default App;