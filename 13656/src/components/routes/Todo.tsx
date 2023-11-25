import React, { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Todos } from '../action/Todos';

interface TodoProps {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const Todo: FC<TodoProps> = () => {
  const [todos, setTodos] = useState<TodoProps[]>([]);
  useEffect(() => { getTodos() }, []);

  const getTodos = async () => {
    await fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Todos</h1>
      <p><Link to={`/Profile`}>Zobacz Todos</Link></p>
      <ul>
        {todos.map((todo) => (
          <Todos key={todo.id} userId={todo.userId} id={todo.id} title={todo.title} completed={todo.completed} />
        ))}
      </ul>
    </div>
  );
};
