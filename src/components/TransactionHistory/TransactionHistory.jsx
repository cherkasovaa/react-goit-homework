import { Transaction } from './Transaction';
import { BoxStyled, CellStyled } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  const titles = ['Type', 'Amount', 'Currency'];

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
            {titles.map((title, i) => (
              <CellStyled key={i} bgcolor="#00bcd5" color="#ffffff" isBold>
                {title.toUpperCase()}
              </CellStyled>
            ))}
          </tr>
        </thead>

        <tbody>
          {items.map((item, i) => {
            let color = i % 2 === 0 ? '#ffffff' : '#e9e9e9';

            return (
              <Transaction
                key={i}
                type={item.type}
                amount={item.amount}
                currency={item.currency}
                bgcolor={color}
              />
            );
          })}
        </tbody>
      </table>
    </BoxStyled>
  );
};
