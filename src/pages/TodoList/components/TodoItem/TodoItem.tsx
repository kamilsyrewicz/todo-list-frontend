import Icon from '../../../../components/Icon/Icon';
import { BodyL } from '../../../../components/Typography/Typography';
import { Row } from 'antd';
import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import {
  TodoSelectionIconWrapper,
  TodoTitleWrapper,
  TodoIconWrapper,
} from './TodoItem.styled';
import { useToggle } from '../../../../hooks/useToggle';

type TodoItemProps = {
  id: string;
  content: string;
  handleEditTodo: (id: string, newContent: string) => void;
  handleRemoveTodo: (id: string) => void;
};

export default function TodoItem({
  id,
  content,
  handleEditTodo,
  handleRemoveTodo,
}: TodoItemProps) {
  const theme = useTheme();
  const [newContent, setNewContent] = useState(content);
  const [isEditMode, toggleEditMode] = useToggle(false);
  const handleNewContent = (value: string) => {
    setNewContent(value);
  };

  const handleUpdateTodo = () => {
    if (!newContent) return;
    handleEditTodo(id, newContent);
    toggleEditMode();
  };
  return (
    <Row style={{ minWidth: '728px' }}>
      <TodoSelectionIconWrapper>
        <Icon name="skills-m" color={theme.text.primary.default} />
      </TodoSelectionIconWrapper>
      <TodoTitleWrapper>
        {!isEditMode ? (
          <BodyL>{content}</BodyL>
        ) : (
          <input
            value={newContent}
            onChange={(e) => handleNewContent(e.target.value)}
          />
        )}
      </TodoTitleWrapper>
      {isEditMode && (
        <TodoIconWrapper onClick={handleUpdateTodo}>
          <Icon name="add-m" color={theme.text.primary.default} />
        </TodoIconWrapper>
      )}
      <TodoIconWrapper onClick={() => toggleEditMode()}>
        <Icon name="edit-m" color={theme.text.primary.default} />
      </TodoIconWrapper>
      <TodoIconWrapper onClick={() => handleRemoveTodo(id)}>
        <Icon name="delete-m" color={theme.text.primary.default} />
      </TodoIconWrapper>
    </Row>
  );
}
