import UserCard from './UserCard';
import styles from './UserCardList.module.css';  // Import the CSS module

const UserCardList = ({ users }) => {
  return (
    <div className={styles.list}>
      {users.map((user, index) => (
        <div className={styles.cardWrapper} key={index}>
          <UserCard user={user} />
        </div>
      ))}
    </div>
  );
}

export default UserCardList;
