import styled from '@emotion/styled'

export const Title = styled.h1`
padding: 10px 10px 0 10px;
color: ${p => p.theme.colors.lightSecond};
font-size: ${p => p.theme.fontSizes.ml};
`

export const Container = styled.div`
dipslay: flex;
align-items: center;
justify-conten: center;

`
export const LeftBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-conten: center;
padding: 0 20px 20px 20px;
`
export const Loader = styled.p`
margin-left: ${p => p.theme.fontSizes.ml};
margin-bottom: ${p => p.theme.fontSizes.l};
color: ${p => p.theme.colors.darkAccent};
font-size: 28px;
`
