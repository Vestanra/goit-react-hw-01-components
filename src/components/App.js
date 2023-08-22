import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import user from "../data-json/user.json";
import data from "../data-json/data.json";
import friends from "../data-json/friends.json";
import transactions from "../data-json/transactions.json";

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics stats={data} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

