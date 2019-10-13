/* import note-modules */
import React from 'react';

/* import Data */
import user from '../Profile/user';
import friends from '../FriendList/friends';
import transactions from '../TransactionHistory/transactions';
import StatsList from '../Stats/StatsList';

/* import component */
import Profile from '../Profile/Profile';
import Stats from '../Stats/Stats';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

/* import CSS */
import styles from './App.module.css';

const App = () => (
  <div className={styles.mainBg}>
    <Profile user={user} />
    <Stats title="Upload stats" stats={StatsList} />
    <FriendList friends={friends} />
    <TransactionHistory transactions={transactions} />
  </div>
);

export default App;
