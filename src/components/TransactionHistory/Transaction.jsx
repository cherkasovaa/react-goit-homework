import { CellStyled } from './TransactionHistory.styled';

export const Transaction = ({ type, amount, currency, bgcolor }) => {
  const capitalize = str => {
    return `${str.slice(0, 1).toUpperCase() + str.slice(1)}`;
  };

  return (
    <tr>
      <CellStyled bgcolor={bgcolor}>{capitalize(type)}</CellStyled>
      <CellStyled bgcolor={bgcolor}>{amount}</CellStyled>
      <CellStyled bgcolor={bgcolor}>{currency}</CellStyled>
    </tr>
  );
};
