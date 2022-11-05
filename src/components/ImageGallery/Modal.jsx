import { Component } from 'react';
import { ModalStyled, OverlayStyled } from './styles';

export class Modal extends Component {
  componentDidMount = () => {
    window.addEventListener('keydown', this.handleKeyDown);
  };

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.handleKeyDown);
  };

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { path, alt } = this.props;
    return (
      <OverlayStyled onClick={this.handleClick}>
        <ModalStyled>
          <img src={path} alt={alt} />
        </ModalStyled>
      </OverlayStyled>
    );
  }
}
