import styled from 'styled-components';
import { ListItem } from './ListItem';

const Box = styled.section`
  max-width: 400px;
  border-radius: 6px;
  overflow: hidden;
`;

const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  color: #5e6366;
  padding: 20px;
  background: #ffffff;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  width: 100%;
`;

export const Statistics = ({ title, stats }) => {
  return (
    <Box className="statistics">
      {title && <Title className="title">{title}</Title>}

      <List className="stat-list">
        {stats.map((el, i) => (
          <ListItem key={i} label={el.label} percentage={el.percentage} />
        ))}
      </List>
    </Box>
  );
};
