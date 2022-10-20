import {
  AvatarStyled,
  BoxStyled,
  ListStyled,
  TextStyled,
  WrapperStyled,
} from './Profile.styled';
import { ProfileData } from './ProfileData';

export const Profile = ({ username, tag, location, avatar, stats }) => (
  <WrapperStyled>
    <BoxStyled className="description" style={{ gap: 10, marginBottom: 30 }}>
      <AvatarStyled src={avatar} alt="User avatar" className="avatar" />
      <TextStyled className="name" weight="bold" color="#1a293c" size="1.2rem">
        {username}
      </TextStyled>
      <TextStyled className="tag">@{tag}</TextStyled>
      <TextStyled className="location">{location}</TextStyled>
    </BoxStyled>

    <ListStyled className="stats">
      {Object.entries(stats).map((el, i) => (
        <ProfileData key={i} el={el} />
      ))}
    </ListStyled>
  </WrapperStyled>
);
