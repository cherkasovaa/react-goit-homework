import styled from 'styled-components';
import { Form, Field } from 'formik';

export const Title = styled.p`
  font-size: ${props => `${props.fontSize}rem` || '1.1rem'};
  font-weight: bold;
  text-transform: uppercase;
`;

export const ContactsListStyle = styled.ul`
  list-style: none;
  font-size: 1.2rem;
`;

export const InputSyled = styled(Field)`
  padding: 10px 15px;
  margin: 10px 0;
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  border: 1px solid black;
  width: 400px;
  border-radius: 3px;
  padding: 15px;
`;

export const ButtonStyle = styled.button`
  align-self: center;
  font-size: 1.1rem;
  background-color: #e5e5e5;
  border: 1px solid black;
  padding: 10px;
  outline: none;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #eeeeee;
  }

  &:active {
    transform: scale(0.95);
  }
`;
