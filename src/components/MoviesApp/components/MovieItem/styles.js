import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { deviceSize } from 'components/MoviesApp/variables';

export const Card = styled.div`
  width: 150px;

  @media (max-width: ${deviceSize.small}) {
    width: 100%;
  }
`;

export const Poster = styled.img`
  border-radius: 10px;
  width: 100%;
  margin-bottom: 7px;
`;

export const CardLink = styled(Link)`
  text-decoration: none;
`;

export const MovieTitle = styled.p`
  font-size: 18px;
  letter-spacing: 0.5px;
  color: ${props => props.theme.primaryFontColor};
  transition: 0.3s;

  &:hover {
    color: ${props => props.theme.highlightFontColor};
  }
`;
