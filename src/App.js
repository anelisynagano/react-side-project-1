import React, { useState, useEffect } from 'react';
import './App.css';
import User from './components/User';
import AddUser from './components/AddUser';

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }

  const handleDelete = (ind) => {
    setUsers(users.filter((item, index) => index !== ind))
  }

  const addUser = (newUser) => {
    setUsers([{name: newUser}, ...users])
  }

  console.log(users);

  return (
    <div className="container">
      <AddUser addUser={addUser} />
      {
        users.map((user, index) => <User key={user.id} handleDelete={() => handleDelete(index)} userInfo={user} />)
      }
    </div>
  );
}

export default App;
