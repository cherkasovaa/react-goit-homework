// import user from './data/user.json';
// import data from './data/data.json';
// import friendsList from './data/friends.json';
// import transactions from './data/transactions.json';

// import { Profile } from 'components/Profile/Profile';
// import { Statistics } from 'components/Statistics/Statistics';
// import { FriendList } from 'components/FriendList/FriendList';
// import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import { Feedback } from 'components/Feedback/Feedback';
import { BoxStyled } from 'App.styled';


export const App = () => {
  return (
    <BoxStyled>
      <Feedback />
      {/* <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friendsList} />
      <TransactionHistory items={transactions} /> */}
    </BoxStyled>
  );
};
