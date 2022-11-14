import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Box } from "../Box"
import { useAuth } from "../../hooks/useAuth"
import {Greeting, Button} from "./UserMenu.styled"

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box display="flex" alignItems='center' as="div" justifyContent="center">
      <Greeting> Welcome, {user.name} </Greeting>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Box>
  );
};
