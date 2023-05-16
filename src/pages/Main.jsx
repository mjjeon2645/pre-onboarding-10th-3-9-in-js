import { useEffect, useState } from 'react';

import Header from '../components/Header';
import InputTodo from '../components/InputTodo';
import Dropdown from '../components/Dropdown';
import TodoList from '../components/TodoList';

import { getTodoList } from '../api/todo';

export default function Main() {
  const [todoListData, setTodoListData] = useState([]);

  const isOpen = true;

  useEffect(() => {
    (async () => {
      const { data } = await getTodoList();
      setTodoListData(data || []);
    })();
  }, []);

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo setTodos={setTodoListData} />
        <Dropdown isOpen={isOpen} />
        <TodoList todos={todoListData} setTodos={setTodoListData} />
      </div>
    </div>
  );
}
