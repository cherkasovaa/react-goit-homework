import styled from 'styled-components';
import { ProfileData } from './ProfileData';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled(Box)`
  background: #ffffff;
  width: 270px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
`;

const Avatar = styled.img`
  width: 100px;
  border-radius: 50%;
  margin: 30px 0 20px;
`;

const Text = styled.p`
  font-size: ${props => props.size || '1rem'};
  font-weight: ${props => props.weight || 500};
  color: ${props => props.color || '#a2a7ac'};
`;

const List = styled.ul`
  display: flex;
  width: 100%;
`;

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Wrapper>
      <Box className="description" style={{gap: 10, marginBottom: 30}} >
        <Avatar src={avatar} alt="User avatar" className="avatar" />
        <Text className="name" weight="bold" color="#1a293c" size="1.2rem">
          {username}
        </Text>
        <Text className="tag">@{tag}</Text>
        <Text className="location">{location}</Text>
      </Box>

      <List className="stats">
        {Object.entries(stats).map((el, i) => (
          <ProfileData key={i} el={el} />
        ))}
      </List>
    </Wrapper>
  );
};