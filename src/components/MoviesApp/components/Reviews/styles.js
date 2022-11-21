import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CardWrapper = styled.li`
  max-width: 600px;
  width: 100%;
  border-radius: 6px;
  background-color: #fff;
  color: #000;
  padding: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  overflow: hidden;
`;

export const Name = styled.p`
  font-weight: bold;
`;
