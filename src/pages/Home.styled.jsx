import styled from '@emotion/styled'

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0 10px;
`

export const Title = styled.h1`
font-size: 22px;
margin-top: 20px;
color: ${p => p.theme.colors.darkBlue};

`

export const Subtitle = styled.h2` 
font-size: 20px;
margin: 20px 0;
color: ${p => p.theme.colors.ligtherBlue};
`

