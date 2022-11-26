import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-switch';
import * as S from './styles';

const Header = ({ links, checkTheme }) => {
  const [checkedTheme, setCheckedTheme] = useState(
    JSON.parse(window.localStorage.getItem('switcherOn')) ?? false
  );
  const capitalize = value => value.slice(0, 1).toUpperCase() + value.slice(1);

  const handleChange = () => {
    setCheckedTheme(!checkedTheme);
    window.localStorage.setItem('switcherOn', JSON.stringify(!checkedTheme));
    return checkTheme(checkedTheme);
  };

  return (
    <S.Header>
      <S.Container>
        <S.Navigation>
          {links.map(({ name, path, isFirst }) => {
            return isFirst ? (
              <S.MenuLink key={name} to={path} end>
                {capitalize(name)}
              </S.MenuLink>
            ) : (
              <S.MenuLink key={name} to={path}>
                {capitalize(name)}
              </S.MenuLink>
            );
          })}
        </S.Navigation>
        <Switch
          onChange={handleChange}
          checked={checkedTheme}
          width={40}
          height={20}
          onColor="#333679"
          uncheckedIcon={false}
          checkedIcon={false}
        />
      </S.Container>
    </S.Header>
  );
};

export default Header;

Header.defaultProps = {
  links: [],
  checkTheme: () => {},
};

Header.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ),
  checkTheme: PropTypes.func.isRequired,
};
