import styled from 'styled-components';

export const BoxStyled = styled.div`
  display: flex;
  flex-direction: ${props => props.fDirection || 'row'};
  justify-content: space-between;
  width: ${props => props.width || '100%'};
  max-width: ${props => props.maxWidth || '100%'};
  margin: 0 auto;
`;

export const TitleStyled = styled.h2`
  font-size: 2rem;
  color: #0d0d27;
  margin-bottom: 15px;
`;

export const ButtonStyled = styled.button`
  text-transform: uppercase;
  padding: 10px 15px;
  background-color: transparent;
  border: 2px solid;
  border-radius: 4px;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    to right top,
    #321a5c,
    rgba(255, 255, 255, 0)
  );
  transition: all 0.5s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    background-color: ${props => props.bgColor};
  }

  &:active {
    transform: scale(1);
  }
`;
