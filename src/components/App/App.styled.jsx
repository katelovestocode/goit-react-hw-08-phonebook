import styled from '@emotion/styled'
import { NavLink } from "react-router-dom";

export const Container = styled.div` 
display: flex;
gap: 50px;
`

export const Nav = styled.nav`
padding: 0 20px;
display: flex;
flex-direction: row;
justify-content: space-between;
box-shadow: 10px 9px 20px 0px rgba(99,99,99,0.65);
border-radius:${p => p.theme.radii.normal};
background-color: ${p => p.theme.colors.headerColor};
`

export const Header = styled.header`

` 

export const NavLinkItem = styled(NavLink)`
font-size: ${p => p.theme.fontSizes.sm};
color: ${p => p.theme.colors.lightBlue};
font-weight: ${p => p.theme.fontWeights.bold};
padding: 30px 0;

  &.active {
    background-color: transperent;
    color: ${p => p.theme.colors.darkBlue};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.darkBlue};
  }

`
