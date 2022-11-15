import styled from '@emotion/styled'

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`

export const Title = styled.h1`
font-size: 78px;
margin-top: 50px;
color: ${p => p.theme.colors.brownSecond};
font-family: 'Dancing Script', cursive, sans-serif;

`

export const Subtitle = styled.h2` 
font-size: 60px;
margin-top: 50px;
color: ${p => p.theme.colors.lightSecond};
font-family: 'Dancing Script', cursive, sans-serif;
`