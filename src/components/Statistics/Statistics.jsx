import { ListItem } from './ListItem';
import { BoxStyled, ListStyled, TitleStyled } from './Statistic.styled';

export const Statistics = ({ title, stats }) => (
  <BoxStyled className="statistics">
    {title && <TitleStyled className="title">{title}</TitleStyled>}

    <ListStyled className="stat-list">
      {stats.map(({ id, label, percentage }) => (
        <ListItem key={id} label={label} percentage={percentage} />
      ))}
    </ListStyled>
  </BoxStyled>
);
