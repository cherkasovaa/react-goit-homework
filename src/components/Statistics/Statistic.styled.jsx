import styled from 'styled-components';

export const BoxStyled = styled.section`
  max-width: 400px;
  border-radius: 6px;
  overflow: hidden;
`;

export const TitleStyled = styled.h2`
  text-align: center;
  text-transform: uppercase;
  color: #5e6366;
  padding: 20px;
  background: #ffffff;
`;

export const ListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  width: 100%;
`;


export const ItemStyled = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: calc(100% / 4);
  flex-grow: 1;
  padding: 10px;
  background: ${props => props.color || 'red'};
  box-sizing: border-box;
`;

export const TextStyled = styled.span`
  font-size: ${props => props.size || '0.8rem'};
  color: #fae1e4;
`;
