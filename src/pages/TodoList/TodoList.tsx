import React from 'react';
import { ListItem } from './TodoList.styled';
import { ConfigProvider, Empty, List } from 'antd';
import { useTodoListApi } from './useTodoListApi';
import TodoItem from './components/TodoItem/TodoItem';
import AddItem from './components/AddItem/AddItem';

const customizeRenderEmpty = () => (
  <Empty
    description={
      <span>
        There are currently no todos. <br />
        Click button "New Item" to add new todos.
      </span>
    }
  />
);

export default function TodoList() {
  const { todoList, handleEditTodo, handleAddNewTodo, handleRemoveTodo } =
    useTodoListApi();
  return (
    <ConfigProvider renderEmpty={customizeRenderEmpty}>
      <List
        bordered
        dataSource={todoList}
        renderItem={(item: any) => (
          <ListItem key={item.id} style={{ minWidth: '768px' }}>
            <TodoItem
              id={item.id}
              content={item.content}
              handleRemoveTodo={handleRemoveTodo}
              handleEditTodo={handleEditTodo}
            />
          </ListItem>
        )}
      />
      <AddItem handleAddNewTodo={handleAddNewTodo} />
    </ConfigProvider>
  );
}
