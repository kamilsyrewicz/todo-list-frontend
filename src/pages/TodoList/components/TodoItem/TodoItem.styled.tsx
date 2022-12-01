import styled from 'styled-components';

export const Row = styled.div`
    width: 100%;
    height: 100%
    display: flex;
    flex-flow: row nowrap;
    justify-content: start;
    align-items: center;
`;

export const TodoSelectionIconWrapper = styled.span`
  margin-right: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

export const TodoTitleWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  margin-right: auto;
`;

export const TodoIconWrapper = styled.div`
  margin-left: 48px;
  position: relative;
  right: 5px;
  &:hover {
    cursor: pointer;
  }
`;
