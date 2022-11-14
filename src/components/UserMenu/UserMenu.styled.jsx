import styled from '@emotion/styled'


export const Greeting = styled.p`
font-size: ${p => p.theme.fontSizes.ml};
color: ${p => p.theme.colors.lightSecond};
font-weight: ${p => p.theme.fontWeights.bold};
text-align: center;
margin-right: 30px;
` 

export const Button = styled.button`
margin-top: ${p => p.theme.space[2]}px;
color: ${p => p.theme.colors.lightSecond};
font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSizes.sm};
width: 120px;
padding: ${p => p.theme.space[2]}px;
background-color: ${p => p.theme.colors.superLightBrown};
border:  ${p => p.theme.borders.bold} ${p => p.theme.colors.lightSecond};
border-radius:${p => p.theme.radii.normal};

  &:hover {
    background-color: ${p => p.theme.colors.lightSecond};
    color: ${p => p.theme.colors.brightAccent};
  }

`