import { useState } from 'react';
import styles from './TheForm.module.css';  // Import the CSS module

const FormField = ({ placeResult }) => {
  const [userName, setUserName] = useState({ theBoi: '' });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!userName.theBoi) {
      alert('No user entered');
      return;
    }

    placeResult(userName.theBoi);
    setUserName({ theBoi: '' });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserName((currentState) => ({
      ...currentState,
      [name]: value,
    }));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        <input
          className={styles.input}
          type="text"
          name="theBoi"
          onChange={handleChange}
          value={userName.theBoi}
          placeholder="Enter username"
        />
      </label>
      <br />
      <button className={styles.button} type="submit">Submit</button>
    </form>
  );
};

export default FormField;
