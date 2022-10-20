import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map((friend, i) => {
      return (
        <FriendListItem
          key={i}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      );
    })}
  </ul>
);
