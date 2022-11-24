import styled from 'styled-components';
import { deviceSize } from 'components/MoviesApp/variables';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 35px;

  @media (max-width: ${deviceSize.small}) {
    justify-content: center;
  }
`;

export const CardWrapper = styled.li`
  width: 150px;
  border-radius: 6px;
  background-color: #fff;
  color: #000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  overflow: hidden;

  @media (max-width: ${deviceSize.medium}) {
    width: calc(100% / 3.5);
  }

  @media (max-width: ${deviceSize.small}) {
    width: 50%;
  }

  @media (max-width: ${deviceSize.xsmall}) {
    width: 70%;
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const Info = styled.div`
  font-size: 0.9rem;
  padding: 10px;
`;

export const Name = styled.p`
  font-weight: bold;
`;
