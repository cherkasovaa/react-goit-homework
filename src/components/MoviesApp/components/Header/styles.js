import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: 10px 0;
  box-shadow: 3px 0 10px rgba(0, 0, 0, 1);
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 15px;
`;

export const MenuLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  transition: 0.3s;

  &:hover {
    color: ${props => props.theme.highlightFontColor};
  }

  &.active {
    color: ${props => props.theme.highlightFontColor};
  }
`;
