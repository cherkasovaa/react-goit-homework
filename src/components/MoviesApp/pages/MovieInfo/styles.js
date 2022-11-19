const { default: styled } = require('styled-components');

export const MovieInfo = styled.p`
  font-size: 18px;
  letter-spacing: 0.5px;
  color: ${props => props.theme.primaryFontColor};
  transition: 0.3s;

  &:hover {
    color: ${props => props.theme.highlightFontColor};
  }
`;
