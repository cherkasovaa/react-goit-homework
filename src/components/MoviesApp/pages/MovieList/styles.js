import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Card = styled.div`
  width: 150px;
`;

export const Poster = styled.img`
  border-radius: 10px;
  width: 100%;
  height: auto;
  margin-bottom: 7px;
`;

export const CardLink = styled(Link)`
  text-decoration: none;
`;
