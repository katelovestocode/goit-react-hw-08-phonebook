import { Container } from "./AuthNav.styled"
import {NavLinkItem} from "../App/App.styled"

export const AuthNav = () => {
  return (
      <Container>
      <NavLinkItem to="/register" key={'register'}>Register </NavLinkItem>

      <NavLinkItem to="/login" key={'login'}> Log In </NavLinkItem>
    </Container>
  );
};