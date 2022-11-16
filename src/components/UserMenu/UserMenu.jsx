import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Box } from "../Box"
import { useAuth } from "../../hooks/useAuth"
import {Greeting, Button} from "./UserMenu.styled"
import { Container } from "./UserMenu.styled";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box display="flex" alignItems='center' as="div" justifyContent="center">
      <Container> <Greeting> <span>&#128522;</span> Welcome, {user.name} </Greeting></Container>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Box>
  );
};
