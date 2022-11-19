import styled from 'styled-components';

export const Container = styled.main`
  max-width: 80%;
  margin: 0 auto;
  padding: 30px 0;
`;

export const Header = styled.h1`
  color: ${props => props.theme.primaryFontColor};
  margin-bottom: 20px;
`;

export const MovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 15px;
`;
