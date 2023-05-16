/* eslint-disable consistent-return */
import { FaPlusCircle, FaSpinner } from 'react-icons/fa';
import { useCallback, useEffect, useState } from 'react';

import { createTodo } from '../api/todo';
import useFocus from '../hooks/useFocus';
import useRecommendationStore from '../hooks/useRecommendationStore';

export default function InputTodo({ setTodos }) {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { ref, setFocus } = useFocus();
  const recommendationStore = useRecommendationStore();

  useEffect(() => {
    setFocus();
  }, [setFocus]);

  const handleSubmit = useCallback(
    async (e) => {
      try {
        e.preventDefault();
        setIsLoading(true);

        const trimmed = inputText.trim();
        if (!trimmed) {
          return alert('Please write something');
        }

        const newItem = { title: trimmed };
        const { data } = await createTodo(newItem);

        if (data) {
          return setTodos((prev) => [...prev, data]);
        }
      } catch (error) {
        console.error(error);
        alert('Something went wrong.');
      } finally {
        setInputText('');
        setIsLoading(false);
      }
    },
    [inputText, setTodos],
  );

  const handleChangeInput = async (e) => {
    const { value } = e.target;
    setInputText(value);
    await recommendationStore.fetchRecommendation(value);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        className="input-text"
        placeholder="Add new todo..."
        ref={ref}
        value={inputText}
        onChange={handleChangeInput}
        disabled={isLoading}
      />
      {!isLoading ? (
        <button className="input-submit" type="submit">
          <FaPlusCircle className="btn-plus" />
        </button>
      ) : (
        <FaSpinner className="spinner" />
      )}
    </form>
  );
}
