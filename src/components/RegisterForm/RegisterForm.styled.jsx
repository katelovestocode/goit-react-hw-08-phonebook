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
background-color: ${p => p.theme.colors.white};
color: ${p => p.theme.colors.accentColor};
font-size:  ${p => p.theme.fontSizes.sm};

border: 0px solid;
box-shadow: 0 2px 4px rgb(0 0 0 / 20%);

 &:focus {
 outline:  ${p => p.theme.colors.superLightBrown} solid 3px;
 }
`

export const Text = styled.p`
margin-bottom: ${p => p.theme.space[2]}px;
color: ${p => p.theme.colors.lightSecond};
font-weight: ${p => p.theme.fontWeights.bold};
font-size:  ${p => p.theme.fontSizes.sm};
`

export const Button = styled.button`
margin-top: ${p => p.theme.space[2]}px;
color: ${p => p.theme.colors.lightSecond};
font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSizes.m};
width: 120px;
padding: ${p => p.theme.space[2]}px;
background-color: ${p => p.theme.colors.superLightBrown};
border-radius:${p => p.theme.radii.superRound};
border: 0px solid;
box-shadow: 0 2px 4px rgb(0 0 0 / 20%);

  &:hover, &:focus  {
    background-color: ${p => p.theme.colors.lightSecond};
    color: ${p => p.theme.colors.brightAccent};
 
  }
`