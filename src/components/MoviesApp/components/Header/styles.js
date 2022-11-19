import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import * as theme from '../../variables';

export const Header = styled.header`
  padding: 10px 15px;
  box-shadow: 3px 0 10px rgba(0, 0, 0, 1);
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 15px;
`;

export const MenuLink = styled(NavLink)`
  text-decoration: none;
  color: ${props => props.theme.primaryFontColor};
  transition: 0.3s;

  &:hover {
    color: ${props => props.theme.highlightFontColor};
  }

  &.active {
    color: ${props => props.theme.highlightFontColor};
  }
`;
