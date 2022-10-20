import { AvatarStyled, BoxStyled, StatusStyled, UserNameStyled } from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <BoxStyled className="item">
      <StatusStyled className="status" isOnline={isOnline}></StatusStyled>
      <AvatarStyled className="avatar" src={avatar} alt="User avatar" />
      <UserNameStyled className="name">{name}</UserNameStyled>
    </BoxStyled>
  );
};
