import { Box } from '../Box';
import ContactForm from "../ContactForm/ContactForm"
import ContactList from "../ContactList/ContactList"
import Filter from "../Filter/Filter"
import {Title, Container, LeftBox} from "./App.styled"


export const App = () => {

    return (

      <Box display="flex" flexDirection="row" alignItems='center' justifyContent="space-around" p={30} as="main">
        
        <LeftBox> 
        <Title> Phonebook </Title>
        <ContactForm /> 
        </LeftBox>

        <Container> 
        <Filter />
       
        <ContactList />
        </Container>
      
      </Box>
    )
  

};

