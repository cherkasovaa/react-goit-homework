import styled from 'styled-components';

const Cell = styled.th`
  font-size: 1rem;
  font-weight: ${props => (props.isBold ? 'bold' : '400')};
  color: ${props => props.color || '#858a8e'};
  border: 1px solid black;
  padding: 10px;
  text-align: center;
  width: calc(100% / 3);
  background: ${props => props.bgcolor || '#ffffff'};
`;

export const Transaction = ({ type, amount, currency, bgcolor }) => {
  const capitalize = str => {
    return `${str.slice(0, 1).toUpperCase() + str.slice(1)}`;
  };

  return (
    <tr>
      <Cell bgcolor={bgcolor}>{capitalize(type)}</Cell>
      <Cell bgcolor={bgcolor}>{amount}</Cell>
      <Cell bgcolor={bgcolor}>{currency}</Cell>
    </tr>
  );
};
