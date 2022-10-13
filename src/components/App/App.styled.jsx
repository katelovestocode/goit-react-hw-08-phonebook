import styled from '@emotion/styled'

export const Title = styled.h1`
padding: ${p => p.theme.space[2]}px;
color: ${p => p.theme.colors.accentColor};
font-size: 56px;
`

export const Container = styled.div`
border:  ${p => p.theme.borders.bold} ${p => p.theme.colors.accentColor};
border-radius:${p => p.theme.radii.normal};
`
export const LeftBox = styled.div`
border:  ${p => p.theme.borders.bold} ${p => p.theme.colors.accentColor};
border-radius:${p => p.theme.radii.normal};
display: flex;
flex-direction: column;
padding: ${p => p.theme.space[4]}px;
`
