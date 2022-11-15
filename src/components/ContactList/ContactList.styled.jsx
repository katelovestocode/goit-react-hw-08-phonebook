import styled from '@emotion/styled'

export const List = styled.ul`
padding: ${p => p.theme.space[2]}px;
font-size:  ${p => p.theme.fontSizes.l};
color: ${p => p.theme.colors.accentColor};
display: flex;
flex-direction: column;
`
export const ListItem = styled.li`
padding: ${p => p.theme.space[4]}px;
font-size:  ${p => p.theme.fontSizes.l};
color: ${p => p.theme.colors.lightSecond};
display: flex;
align-items: start;
justify-content: space-between;
margin-bottom: 10px;
background-color: ${p => p.theme.colors.superLightBrown};
border:  ${p => p.theme.borders.bold} ${p => p.theme.colors.lightSecond};
border-radius:${p => p.theme.radii.superRound};
`
export const Button = styled.button`
margin-left: ${p => p.theme.space[2]}px;
color: ${p => p.theme.colors.superLightBrown};
font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSizes.xs};
width:  70px;
padding: ${p => p.theme.space[1]}px;
background-color: ${p => p.theme.colors.lightSecond};
border:  ${p => p.theme.borders.bold} ${p => p.theme.colors.lightSecond};
border-radius:${p => p.theme.radii.superRound};

  &:hover {
    background-color: ${p => p.theme.colors.superLightBrown};
    color: ${p => p.theme.colors.lightSecond};
  }
`
export const Text = styled.p`
color: ${p => p.theme.colors.lightSecond};
font-weight: ${p => p.theme.fontWeights.bold};
font-size: 24px;
`

export const Span = styled.span`
color: ${p => p.theme.colors.lightSecond};
font-weight: ${p => p.theme.fontWeights.bold};
font-size: 24px;
`

export const Container = styled.div`
display: flex;
padding-left: 50px;
`