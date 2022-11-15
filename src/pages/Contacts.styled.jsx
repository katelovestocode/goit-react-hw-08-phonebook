import styled from '@emotion/styled'

export const Title = styled.h1`
padding: ${p => p.theme.space[2]}px;
color: ${p => p.theme.colors.lightSecond};
font-size: ${p => p.theme.fontSizes.x};
`

export const Container = styled.div`
`
export const LeftBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-conten: center;
padding: ${p => p.theme.space[4]}px;
`
export const Loader = styled.p`
margin-left: ${p => p.theme.fontSizes.ml};
margin-bottom: ${p => p.theme.fontSizes.l};
color: ${p => p.theme.colors.darkAccent};
font-size: 28px;
`
