import styled from 'styled-components';

export const CellStyled = styled.th`
  font-size: 1rem;
  font-weight: ${props => (props.isBold ? 'bold' : '400')};
  color: ${props => props.color || '#858a8e'};
  border: 1px solid black;
  padding: 10px;
  text-align: center;
  width: calc(100% / 3);
  background: ${props => props.bgcolor || '#ffffff'};
`;

export const BoxStyled = styled.div`
  height: 100%;
  padding: 30px 0;
`;
