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
width: 400px;
padding: ${p => p.theme.space[2]}px;
border:  ${p => p.theme.borders.bold} ${p => p.theme.colors.brownSecond};
border-radius:${p => p.theme.radii.superRound};
background-color: ${p => p.theme.colors.white};
color: ${p => p.theme.colors.accentColor};
font-size: 28px;
`

export const Text = styled.p`
margin-bottom: ${p => p.theme.space[2]}px;
color: ${p => p.theme.colors.lightSecond};
font-weight: ${p => p.theme.fontWeights.bold};
font-size:  ${p => p.theme.fontSizes.l};
`

export const Button = styled.button`
margin-top: ${p => p.theme.space[2]}px;
color: ${p => p.theme.colors.lightSecond};
font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSizes.sm};
width: 150px;
padding: ${p => p.theme.space[2]}px;
background-color: ${p => p.theme.colors.superLightBrown};
border:  ${p => p.theme.borders.bold} ${p => p.theme.colors.lightSecond};
border-radius:${p => p.theme.radii.superRound};

  &:hover {
    background-color: ${p => p.theme.colors.lightSecond};
    color: ${p => p.theme.colors.brightAccent};
  }

`