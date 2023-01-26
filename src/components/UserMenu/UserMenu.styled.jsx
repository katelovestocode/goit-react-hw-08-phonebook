import styled from '@emotion/styled'

export const Container = styled.div`

display: block;

@media screen and (max-width: 580px) {
  display: none;
}
`

export const Greeting = styled.p`
font-size:  ${p => p.theme.fontSizes.sm};
color: ${p => p.theme.colors.white};
font-weight: ${p => p.theme.fontWeights.bold};
text-align: center;
margin-right: 30px;
` 

export const Button = styled.button`
color: ${p => p.theme.colors.white};
font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSizes.s};
width: 65px;
padding: 8px 5px;
background-color: ${p => p.theme.colors.blue200};
border-radius:${p => p.theme.radii.superRound};
border: 0px solid;
box-shadow: 0 2px 4px rgb(0 0 0 / 20%);

  &:hover {
    background-color: ${p => p.theme.colors.darkBlue};

  }

`