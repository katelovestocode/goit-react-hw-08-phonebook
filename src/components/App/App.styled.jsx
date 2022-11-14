import styled from '@emotion/styled'
import { NavLink } from "react-router-dom";

export const Container = styled.div` 
display: flex;
gap: 50px;`

export const Nav = styled.nav`
padding: 40px;
display: flex;
flex-direction: row;
justify-content: space-between;
margin-bottom: ${p => p.theme.fontSizes.ml};
border-bottom:  5px solid ${p => p.theme.colors.lightSecond};
box-shadow: 10px 9px 20px 0px rgba(99,99,99,0.65);
border-radius:${p => p.theme.radii.normal};
background-color: white;
`

export const NavLinkItem = styled(NavLink)`
font-size: ${p => p.theme.fontSizes.ml};
color: ${p => p.theme.colors.lightSecond};
font-weight: ${p => p.theme.fontWeights.bold};
// font-family: 'Dancing Script', cursive, sans-serif;

  &.active {
    background-color: transperent;
    color: ${p => p.theme.colors.superLightBrown};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.superLightBrown};
  }
`