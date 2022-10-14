import { Profile } from 'Profile/Profile';
import { FriendList } from 'FriendList/FriendList';
import { TransactionHistory } from 'TransactionHistory/TransactionHistory';
import { Statistics } from 'Statistics/Statistics';
import user from '../data/user.json';
import data from '../data/data.json';
import friendsList from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        padding: '30px'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friendsList} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
