import styled from 'styled-components';

const Box = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 250px;
  margin-bottom: 10px;
  padding: 12px 15px;
  border-radius: 2px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.17);
`;

const Status = styled.span`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: ${props => (props.isOnline ? 'green' : 'red')};
`;

const UserName = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
`;

const Avatar = styled.img`
  width: 48px;
`;

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Box className="item">
      <Status className="status" isOnline={isOnline}></Status>
      <Avatar className="avatar" src={avatar} alt="User avatar" />
      <UserName className="name">{name}</UserName>
    </Box>
  );
};
