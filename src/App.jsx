import { useState } from 'react';
import UserCardList from './components/UserCardList';
import FormField from './components/TheForm';
import styles from './App.module.css';  // Importing the CSS module

function App() {
  const [users, setUsers] = useState([]);

  const placeResult = async (newUser) => {
    try {
      const response = await fetch(`https://api.github.com/users/${newUser}`);
      
      // Check if the user was found (status 404 means the user doesn't exist)
      if (!response.ok) {
        alert(`User ${newUser} not found.`);
        return;
      }

      const user = await response.json();

      // Add the valid user data to the users array
      setUsers((prevUsers) => [...prevUsers, user]);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  return (
    <div className={styles.appContainer}>  {/* Apply app-level container */}
      <h1 className={styles.header}>GitHub User Finder</h1>
      <div className={styles.content}>
        <FormField placeResult={placeResult} />
        <UserCardList users={users} />
      </div>
    </div>
  );
}

export default App;
