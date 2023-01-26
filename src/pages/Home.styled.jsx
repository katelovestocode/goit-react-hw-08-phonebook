import styled from '@emotion/styled'

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const Title = styled.h1`
font-size: 22px;
margin-top: 15px;
color: ${p => p.theme.colors.darkBlue};

`

export const Subtitle = styled.h2` 
font-size: 20px;
margin: 15px 0;
color: ${p => p.theme.colors.ligtherBlue};
`

