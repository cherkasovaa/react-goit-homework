import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(({id, avatar, name, isOnline}) => {
      return (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      );
    })}
  </ul>
);
