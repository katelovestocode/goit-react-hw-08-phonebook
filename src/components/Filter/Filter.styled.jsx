import styled from '@emotion/styled'

export const Label = styled.label`
padding: ${p => p.theme.space[2]}px;
font-size:  ${p => p.theme.fontSizes.sm};
color: ${p => p.theme.colors.accentColor};
display: flex;
flex-direction: column;
align-items: center;
justify-conten: center;
`

export const Input = styled.input`
width: 100%;
padding: ${p => p.theme.space[2]}px;
border-radius:${p => p.theme.radii.superRound};
font-size:  ${p => p.theme.fontSizes.sm};
background-color: ${p => p.theme.colors.white};
color: ${p => p.theme.colors.darkBlue};
font-size:  ${p => p.theme.fontSizes.sm};
border: 0px solid;
box-shadow: 0 2px 4px rgb(0 0 0 / 20%);

 &:focus {
 outline:  ${p => p.theme.colors.blue100} solid 2px;
 }
`
export const Text = styled.p`
margin-bottom: ${p => p.theme.space[2]}px;
color: ${p => p.theme.colors.headerColor};
font-weight: ${p => p.theme.fontWeights.bold};
`
export const Title = styled.h2`
padding: 0px 10px 0 10px;
font-size:  ${p => p.theme.fontSizes.ml};
color: ${p => p.theme.colors.darkBlue};
`
