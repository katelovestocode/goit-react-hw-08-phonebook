import { Box } from '../Box';
import ContactForm from "../ContactForm/ContactForm"
import ContactList from "../ContactList/ContactList"
import Filter from "../Filter/Filter"
import { Title, Container, LeftBox, Loader } from "./App.styled"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { getIsLoading, getError} from "redux/selectors";


export const App = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


    return (
      <Box display="flex" flexDirection="row" alignItems='center' justifyContent="space-around" p={30} as="main">
        
        <LeftBox> 
        <Title> Phonebook </Title>
        <ContactForm /> 
        </LeftBox>

        <Container> 
        
        <Filter />
          {isLoading && !error && <Loader> Request in progress...</Loader>}
          
          {error && <p> {error} </p>}
          
        <ContactList />
        </Container>
      
      </Box>
    )
  

};




