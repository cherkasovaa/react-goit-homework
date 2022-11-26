import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.primaryFontColor};
  min-height: 100vh;
  width: 100%;
`;
