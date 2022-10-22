import styled, { css } from 'styled-components';
import { Form, Field } from 'formik';

const APP_WIDTH = 300;
const BG_COLOR = '#ffffff';

const borderShadow = css`
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.p`
  font-size: ${props => `${props.fontSize}rem` || '1rem'};
  font-weight: bold;
  text-transform: uppercase;
`;

export const ContactsListStyle = styled.ul`
  width: ${APP_WIDTH}px;
  list-style: none;
`;

export const InputSyled = styled(Field)`
  ${borderShadow}
  padding: 5px;
  margin-bottom: 10px;
`;

export const FilterStyled = styled.input`
  ${borderShadow}
  padding: 5px;
  width: ${APP_WIDTH}px;
`;

export const FormStyled = styled(Form)`
  ${borderShadow}
  display: flex;
  flex-direction: column;
  background-color: ${BG_COLOR};
  width: ${APP_WIDTH}px;
  padding: 8px;
`;

export const ButtonStyle = styled.button`
  ${borderShadow}
  align-self: center;
  background-color: ${BG_COLOR};
  padding: 5px 9px;
  outline: none;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
  }

  &:active {
    transform: scale(0.95);
  }
`;
