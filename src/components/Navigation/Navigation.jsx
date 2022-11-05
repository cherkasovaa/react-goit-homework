import { findByLabelText } from '@testing-library/react';
import { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px',
  },
  bmBurgerBars: {
    background: '#373a47',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    color: '#b8b7ad',
    padding: '0.8em',
  },
  bmItem: {
    color: '#b8b7ad',
    textDecoration: 'none',
    display: 'inline-block',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
};

export class Navigation extends Component {
  normalizeName = value => {
    return value
      .split(' ')
      .map(el => el.toLowerCase())
      .join('');
  };

  renderCmponent = e => {
    e.preventDefault();
    this.props.showProject(e.target.id);
  };

  render() {
    return (
      <Menu styles={styles}>
        {this.props.list.map(el => {
          return (
            <a
              key={this.normalizeName(el)}
              id={this.normalizeName(el)}
              className="menu-item"
              href="/"
              onClick={this.renderCmponent}
            >
              {el}
            </a>
          );
        })}
      </Menu>
    );
  }
}
