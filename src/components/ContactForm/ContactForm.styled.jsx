import styled from '@emotion/styled'

export const Form = styled.form`
padding: ${p => p.theme.space[2]}px;
display: flex;
flex-direction: column;
align-items: center;
justify-conten: center;
// border:  ${p => p.theme.borders.bold} ${p => p.theme.colors.accentColor};
// border-radius:${p => p.theme.radii.normal};
`


export const Label = styled.label`
padding: ${p => p.theme.space[2]}px;
display: flex;
flex-direction: column;
align-items: center;
justify-conten: center;
`

export const Input = styled.input`
width: 300px;
padding: ${p => p.theme.space[2]}px;
border:  ${p => p.theme.borders.bold} ${p => p.theme.colors.brightAccent};
border-radius:${p => p.theme.radii.normal};
background-color: ${p => p.theme.colors.ivoryLight};
color: ${p => p.theme.colors.accentColor};
font-size: 28px;
`

export const Text = styled.p`
margin-bottom: ${p => p.theme.space[2]}px;
color: ${p => p.theme.colors.darkAccent};
font-weight: ${p => p.theme.fontWeights.bold};
font-size:  ${p => p.theme.fontSizes.l};
`

export const Button = styled.button`
margin-top: ${p => p.theme.space[2]}px;
color: ${p => p.theme.colors.darkAccent};
font-weight: ${p => p.theme.fontWeights.bold};
width: 120px;
padding: ${p => p.theme.space[2]}px;
background-color: ${p => p.theme.colors.ivoryLight};
border:  ${p => p.theme.borders.bold} ${p => p.theme.colors.accentColor};
border-radius:${p => p.theme.radii.normal};

`