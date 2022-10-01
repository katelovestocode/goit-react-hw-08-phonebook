import styled from '@emotion/styled'

export const Title = styled.h1`
padding: ${p => p.theme.space[2]}px;
font-size: 56px;
color: ${p => p.theme.colors.brown};
`

export const Container = styled.div`
border:  ${p => p.theme.borders.bold} ${p => p.theme.colors.accentColor};
border-radius:${p => p.theme.radii.normal};
`