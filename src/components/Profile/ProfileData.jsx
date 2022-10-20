import { ListItemStyled, TextStyled } from './Profile.styled';

export const ProfileData = props => {
  return (
    <ListItemStyled>
      <TextStyled className="label" size="0.85rem">
        {
          (props.el[0] =
            props.el[0].slice(0, 1).toUpperCase() + props.el[0].slice(1))
        }
      </TextStyled>
      <TextStyled className="quantity" weight="bold" color="#1a293c" size="1.05rem">
        {props.el[1]}
      </TextStyled>
    </ListItemStyled>
  );
};
