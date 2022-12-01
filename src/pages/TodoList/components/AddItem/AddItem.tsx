import Icon from '../../../../components/Icon/Icon';
import { Button } from 'antd';
import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { StyledInput, Wrapper } from './AddItem.styled';

type AddItemProps = {
  handleAddNewTodo: (value: string) => void;
};

export default function AddItem({ handleAddNewTodo }: AddItemProps) {
  const theme = useTheme();
  const [value, setValue] = useState('');

  const handleSetValue = (value: string) => {
    setValue(value);
  };

  const handleAdd = () => {
    if (!value) return;
    handleAddNewTodo(value);
    setValue('');
  };
  return (
    <Wrapper>
      <StyledInput
        placeholder="Write your new todo"
        value={value}
        onChange={(e) => handleSetValue(e.target.value)}
      />
      <Button type="primary" size="large" onClick={handleAdd}>
        <Icon name="add-m" color={theme.text.primary.white} />
      </Button>
    </Wrapper>
  );
}
