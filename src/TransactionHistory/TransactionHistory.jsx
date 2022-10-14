import styled from 'styled-components';
import { Transaction } from './Transaction';

const Box = styled.div`
  height: 100%;
  padding: 30px 0;
`;

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

export const TransactionHistory = ({ items }) => {
  const titles = ['Type', 'Amount', 'Currency'];

  return (
    <Box>
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
              <Cell key={i} bgcolor="#00bcd5" color="#ffffff" isBold>
                {title.toUpperCase()}
              </Cell>
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
    </Box>
  );
};
