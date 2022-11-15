import styled from '@emotion/styled'

export const Label = styled.label`
padding: ${p => p.theme.space[2]}px;
font-size:  ${p => p.theme.fontSizes.l};
color: ${p => p.theme.colors.accentColor};
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
font-size:  ${p => p.theme.fontSizes.sm};
background-color: ${p => p.theme.colors.white};
color: ${p => p.theme.colors.accentColor};
font-size: 28px;
`
export const Text = styled.p`
margin-bottom: ${p => p.theme.space[4]}px;
color: ${p => p.theme.colors.lightSecond};
font-weight: ${p => p.theme.fontWeights.bold};
`
export const Title = styled.h2`
padding: ${p => p.theme.space[2]}px;
font-size: 56px;
color: ${p => p.theme.colors.lightSecond};
`
