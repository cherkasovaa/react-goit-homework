import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Header = ({ links }) => {
  const capitalize = value => value.slice(0, 1).toUpperCase() + value.slice(1);

  return (
    <S.Header>
      <S.Navigation>
        {links.map(({ name, path }) => (
          <S.MenuLink key={name} to={path}>
            {capitalize(name)}
          </S.MenuLink>
        ))}
      </S.Navigation>
    </S.Header>
  );
};

export default Header;

Header.defaultProps = {
  links: [],
};

Header.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ),
};
