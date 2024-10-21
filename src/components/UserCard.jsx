import styles from './UserCard.module.css';  // Import the CSS module

const UserCard = ({ user }) => {
  return (
    <div className={styles.card}>
      <h1 className={styles.name}>{user?.name || "Unknown user"}</h1>
      {user && user.avatar_url !== 'N/A' && (
        <img className={styles.avatar} src={user.avatar_url} alt={`${user?.name}'s avatar`} />
      )}
      <h3>{user?.repos_url}</h3>
      <h3 className={styles.followers}>{`This user has ${user?.followers} followers.`}</h3>
    </div>
  );
}

export default UserCard;
