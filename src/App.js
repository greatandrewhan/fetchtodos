import React, { useEffect, useState } from 'react';
import TodoDetail from './TodoDetail';

export default function App() {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => users.slice(0, 5))
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h1 onClick={() => setUserId(user.id)}>{user.name}</h1>
            {userId === user.id && <TodoDetail userId={userId} />}
          </li>
        ))}
      </ul>
    </div>
  );
}

// 1. Display names of up to 5 users from URL (https://jsonplaceholder.typicode.com/users)
// 2. When user name is clicked, fetch the TODOs for the user from (https://jsonplaceholder.typicode.com/users/${userId}/todos) and display title and Done if the todo is completed otherwise Pending if the todo is not completed.
