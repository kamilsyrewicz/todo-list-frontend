import { useState, useEffect } from 'react';
import axios from 'axios';

type TodoListTypes = { id: string; content: string };

export const useTodoListApi = () => {
  const apiUrl = 'http://localhost:5001/api/v1/todos';

  const [todoList, setTodoList] = useState<TodoListTypes[]>([]);

  const handleAddNewTodo = async (newTodoValue: string) => {
    try {
      const { data } = await axios.post(apiUrl, { todo: newTodoValue });
      if (data.success) {
        setTodoList((prev) => [
          ...prev,
          { id: data.todo._id, content: data.todo.todo },
        ]);
      }
    } catch (e) {
      console.log('error: ', JSON.stringify(e));
    }
  };

  const handleRemoveTodo = async (id: string) => {
    try {
      const { data } = await axios.delete(`${apiUrl}/${id}`);
      if (data.success) {
        const newTodoList = todoList.filter((todo) => todo.id !== id);
        setTodoList(newTodoList);
      }
    } catch (e) {
      console.log('error: ', JSON.stringify(e));
    }
  };

  const fetchTodos = async () => {
    try {
      const { data } = await axios.get(apiUrl);
      const parsedStructure = data.todos?.map((el: any) => {
        return { id: el._id, content: el.todo };
      });
      setTodoList(parsedStructure);
    } catch (e) {
      console.log('error: ', JSON.stringify(e));
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleEditTodo = async (id: string, newValue: string) => {
    try {
      const { data } = await axios.patch(`${apiUrl}/${id}`, { todo: newValue });
      if (data.success) {
        const newTodoList = todoList.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              content: newValue,
            };
          }
          return todo;
        });
        setTodoList(newTodoList);
      }
    } catch (e) {
      console.log('error: ', JSON.stringify(e));
    }
  };
  return {
    todoList,
    handleAddNewTodo,
    handleRemoveTodo,
    handleEditTodo,
  };
};
