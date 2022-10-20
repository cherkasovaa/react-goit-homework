import { ListItem } from './ListItem';
import { BoxStyled, ListStyled, TitleStyled } from './Statistic.styled';

export const Statistics = ({ title, stats }) => (
  <BoxStyled className="statistics">
    {title && <TitleStyled className="title">{title}</TitleStyled>}

    <ListStyled className="stat-list">
      {stats.map((el, i) => (
        <ListItem key={i} label={el.label} percentage={el.percentage} />
      ))}
    </ListStyled>
  </BoxStyled>
);
