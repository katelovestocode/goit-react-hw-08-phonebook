import {useState} from 'react';
import { Box } from '../Box';
import ContactForm from "../ContactForm/ContactForm"
import ContactList from "../ContactList/ContactList"
import Filter from "../Filter/Filter"
import {Title, Container, LeftBox} from "./App.styled"
import { nanoid } from 'nanoid'
import useLocalStorage from "../hooks/useLocalStorage"



const App = () => {
   
  const [filter, setFilter] = useState("");
  const [contacts, setContacts] = useLocalStorage("contacts", [])
   
// // ComponentDidMount
//  const [contacts, setContacts] = useState(() => { return JSON.parse(window.localStorage.getItem("contacts")) ?? [] });

// // ComponentDidUpdate
//   useEffect(() => {
//     window.localStorage.setItem("contacts", JSON.stringify(contacts))
//   }, [contacts])

  
  const handleSubmit = ({ name, number}) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    }

    addNewContact(contact);
  }

  const addNewContact = (contact) => {
    console.log(contact)
    contacts.find(item => item.name.toLowerCase() === contact.name.toLowerCase()) ? alert(`${contact.name} is already in contacts`) :
      setContacts(prevState => [...prevState, contact]) 
  }

  const deleteContact = contactId => {
    setContacts(prevState => prevState.filter(contact => contact.id !== contactId)) 
  }

  const changeFilter = (event) => {
    setFilter(event.currentTarget.value);
  }
  
  const getVisibleContacts = () => {

    const normalizedFilter = filter.toLowerCase()
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
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

export default App;



// class App extends Component {
// state = {
//   contacts: [],
//   filter: '',
//   }

//   handleSubmit = ({ name, number}) => {
//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     }

//     this.addNewContact(contact);
//   }

//   addNewContact = (contact) => {
//     this.setState(prevState => prevState.contacts.find(item => item.name.toLowerCase() === contact.name.toLowerCase()) ? alert(`${contact.name} is already in contacts`) :
//       {contacts: [contact, ...prevState.contacts]})
//   }

//   deleteContact = contactId => {
//     this.setState(prevState => ({contacts: prevState.contacts.filter(contact => contact.id !== contactId)}))
//   }

//   changeFilter = (event) => {this.setState({filter: event.currentTarget.value}) }
  
//   getVisibleContacts = () => {
//      const normalizedFilter = this.state.filter.toLowerCase()
//     return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
//   }
 
//   componentDidMount() {
//     // console.log("Component Did Mount")

//     const contacts = localStorage.getItem("contacts");
//     const parsedContacts = JSON.parse(contacts);
    
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//    }
//   }

//   componentDidUpdate(prevProps, prevState) { 
//     // console.log(prevState)
//     // console.log(this.state)

//     if (this.state.contacts !== prevState.contacts) {

//       localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//     }
//   }
  
//   render() {

//     const visibleContacts = this.getVisibleContacts();

//     return (

//       <Box display="flex" flexDirection="row" alignItems='center' justifyContent="space-around" p={30} as="main">
        
//         <LeftBox> 
//         <Title> Phonebook </Title>
//         <ContactForm onSubmittingForm={this.handleSubmit} /> 
//         </LeftBox>

//         <Container> 
//         <Filter value={this.state.filter} onChange={this.changeFilter} />
       
//         <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact} />
//         </Container>
      
//       </Box>
//     )
//   }

// };

// export default App;
