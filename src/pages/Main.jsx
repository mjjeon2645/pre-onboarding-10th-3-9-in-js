import { useEffect, useState } from 'react';

import Header from '../components/Header';
import InputTodo from '../components/InputTodo';
import Dropdown from '../components/Dropdown';
import TodoList from '../components/TodoList';

import { getTodoList } from '../api/todo';
import useRecommendationStore from '../hooks/useRecommendationStore';

export default function Main() {
  const [todoListData, setTodoListData] = useState([]);

  const recommendationStore = useRecommendationStore();

  const { recommendation } = recommendationStore;

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
        <Dropdown isOpen={recommendation.length} recommendation={recommendation} />
        <TodoList todos={todoListData} setTodos={setTodoListData} />
      </div>
    </div>
  );
}
