import React, { useEffect, useState } from 'react';

export default function TodoDetail({ userId }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, [userId]);

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} - {todo.completed ? 'Done' : 'Pending'}
          </li>
        ))}
      </ul>
    </div>
  );
}
