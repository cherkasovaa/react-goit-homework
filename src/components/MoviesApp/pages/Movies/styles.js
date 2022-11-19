import styled from 'styled-components';

export const Container = styled.main`
  max-width: 80%;
  margin: 0 auto;
  padding: 30px 0;
`;

export const Form = styled.form`
  position: relative;
`;

export const SearchFormInput = styled.input`
  font-size: 16px;
  box-sizing: border-box;
  width: 100%;
  height: 46px;
  line-height: 46px;
  padding: 10px 20px;
  border-radius: 30px;
  border: none;
  outline: none;
`;

export const SearchButton = styled.button`
  position: absolute;
  top: 0;
  right: -1px;
  font-size: 16px;
  height: 46px;
  padding: 10px 26px;
  background: linear-gradient(
    to right,
    rgba(0, 231, 57, 1) 0%,
    rgba(0, 20, 221, 1) 100%
  );
  color: ${props => props.theme.primaryFontColor};
  border: 0;
  border-radius: 30px;
  outline: 0;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;
