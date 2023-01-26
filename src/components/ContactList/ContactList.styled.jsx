import styled from '@emotion/styled'

export const List = styled.ul`
// padding: ${p => p.theme.space[2]}px;
font-size:  ${p => p.theme.fontSizes.l};
color: ${p => p.theme.colors.white};
display: flex;
flex-direction: column;
`
export const ListItem = styled.li`
font-size:  ${p => p.theme.fontSizes.sm};
color: ${p => p.theme.colors.white};
display: flex;
align-items: start;
padding: 10px 15px;
margin-bottom: 10px;
background-color: ${p => p.theme.colors.blue200};
border-radius:${p => p.theme.radii.superRound};
box-shadow: 0 2px 4px rgb(0 0 0 / 20%);
`
export const Button = styled.button`
color: ${p => p.theme.colors.white};
font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSizes.xs};
width:  60px;
padding: ${p => p.theme.space[1]}px;
background-color: ${p => p.theme.colors.ligtherBlue};
border:  ${p => p.theme.borders.normal} ${p => p.theme.colors.blue100};
border-radius:${p => p.theme.radii.normal};

  &:hover, &:focus {
    background-color: ${p => p.theme.colors.blue100};
    color: ${p => p.theme.colors.white};
  }
`
export const Text = styled.p`
color: ${p => p.theme.colors.white};
font-weight: ${p => p.theme.fontWeights.bold};
font-size: 20px;
text-align: left;
`

export const Span = styled.span`
color: ${p => p.theme.colors.white};
font-weight: ${p => p.theme.fontWeights.bold};
font-size: 20px;
text-align: left;
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    text-align: left;
    width: 100%;
    margin-right: 10px;
`