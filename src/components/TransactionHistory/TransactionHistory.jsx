import { Transaction } from './Transaction';
import { BoxStyled, CellStyled } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  const titles = [
    { id: 'id-1', title: 'type' },
    { id: 'id-2', title: 'amount' },
    { id: 'id-3', title: 'currency' },
  ];

  return (
    <BoxStyled>
      <table
        className="transaction-history"
        style={{
          borderCollapse: 'collapse',
          borderRadius: '3px',
          overflow: 'hidden',
          width: '500px',
        }}
      >
        <thead>
          <tr>
            {titles.map(({ id, title }) => (
              <CellStyled key={id} bgcolor="#00bcd5" color="#ffffff" isBold>
                {title.toUpperCase()}
              </CellStyled>
            ))}
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }, i) => {
            let color = i % 2 === 0 ? '#ffffff' : '#e9e9e9';

            return (
              <Transaction
                key={id}
                type={type}
                amount={amount}
                currency={currency}
                bgcolor={color}
              />
            );
          })}
        </tbody>
      </table>
    </BoxStyled>
  );
};
