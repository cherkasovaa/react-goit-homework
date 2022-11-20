import { Link } from 'react-router-dom';

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

export const Wrapper = styled.main`
  min-height: 94vh;
  padding: 30px;
  display: flex;
  gap: 18px;
  color: ${props => props.theme.primaryFontColor};
`;

export const Poster = styled.img`
  width: 300px;
  height: auto;
  border-radius: 8px;
  overflow: hidden;
`;

export const InfoWrapper = styled.div`
  width: 100%;
`;

export const Box = styled.div`
  margin-bottom: 25px;
`;

export const Title = styled.h1`
  font-size: ${props => (props.fontSize ? props.fontSize : '2rem')};
  font-weight: 400;
  letter-spacing: 0.5px;
`;

export const SubLinksContainer = styled.div`
  display: flex;
  gap: 30px;
`;

export const SubInformation = styled(Link)`
  font-size: 1.2rem;
  text-decoration: none;
  color: inherit;
  transition: 0.3s;

  &:hover {
    color: ${props => props.theme.highlightFontColor};
  }
`;

export const GenreBox = styled.div`
  display: flex;
  gap: 8px;
  font-size: 0.8rem;
`;
