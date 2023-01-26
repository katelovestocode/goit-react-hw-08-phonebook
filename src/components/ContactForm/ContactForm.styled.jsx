import styled from '@emotion/styled'

export const Form = styled.form`
padding: ${p => p.theme.space[2]}px;
display: flex;
flex-direction: column;
align-items: center;
justify-conten: center;
`

export const Label = styled.label`
padding: ${p => p.theme.space[2]}px;
display: flex;
flex-direction: column;
align-items: center;
justify-conten: center;
`

export const Input = styled.input`
width: 100%;
padding: ${p => p.theme.space[2]}px;
border-radius:${p => p.theme.radii.superRound};
border: 0px solid;
box-shadow: 0 2px 4px rgb(0 0 0 / 20%);
background-color: ${p => p.theme.colors.white};
color: ${p => p.theme.colors.darkBlue};
font-size:  ${p => p.theme.fontSizes.sm};

 &:focus {
 outline:  ${p => p.theme.colors.blue100} solid 2px;
 }
`

export const Text = styled.p`
margin-bottom: ${p => p.theme.space[2]}px;
color: ${p => p.theme.colors.headerColor};
font-weight: ${p => p.theme.fontWeights.bold};
font-size:  ${p => p.theme.fontSizes.sm};
`

export const Button = styled.button`
margin-top: ${p => p.theme.space[2]}px;
color: ${p => p.theme.colors.white};
font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSizes.m};
width: 130px;
padding: ${p => p.theme.space[2]}px;
background-color: ${p => p.theme.colors.ligtherBlue};
border-radius:${p => p.theme.radii.normal};
border: 0px solid;
box-shadow: 0 2px 4px rgb(0 0 0 / 20%);

  &:hover {
    background-color: ${p => p.theme.colors.blue200};
    color: ${p => p.theme.colors.white};
  }

`