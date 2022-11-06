import { Box } from '../Box';
import ContactForm from "../ContactForm/ContactForm"
import ContactList from "../ContactList/ContactList"
import Filter from "../Filter/Filter"
import { Title, Container, LeftBox } from "./App.styled"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { getContacts} from "redux/selectors";


export const App = () => {

    const dispatch = useDispatch();
  // Get state parts
  const { isLoading, error } = useSelector(getContacts);

  // Call the operation
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    // Render the markup depending on the values in the state
    return (

      <Box display="flex" flexDirection="row" alignItems='center' justifyContent="space-around" p={30} as="main">
        
        <LeftBox> 
        <Title> Phonebook </Title>
        <ContactForm /> 
        </LeftBox>

        <Container> 
        
        <Filter />
       
          {isLoading && !error && <b>Request in progress...</b>}
          
          {error && <p> {error} </p>}
          
        <ContactList />
        </Container>
      
      </Box>
    )
  

};




