import { useState } from 'react'
import UserCardList from './components/UserCardList'
import FormField from './components/TheForm'

function App() {

  const [users, setUsers] = useState([]);


  const placeResult = async (newUsers) => {

    try {
      const response = await fetch(`https://api.github.com/users/${newUsers}`);
      const user = await response.json();

      setUsers((prevUsers => [...prevUsers, user]))
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  return (
    <>
      <FormField placeResult={placeResult} />
      <UserCardList users={users} />
    </>
  )
}

export default App;
