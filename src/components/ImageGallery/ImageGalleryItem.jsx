import { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from './Modal';
import { ImageGalleryItemStyled, ImageStyled } from './styles';

export class ImageGalleryItem extends Component {
  state = {
    isOpen: false,
  };

  openModal = () => {
    this.setState({ isOpen: true });
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { path, alt } = this.props;

    return (
      <>
        <ImageGalleryItemStyled>
          <ImageStyled src={path.small} alt={alt} onClick={this.openModal} />
        </ImageGalleryItemStyled>
        {this.state.isOpen && (
          <Modal path={path.regular} alt={alt} onClose={this.closeModal} />
        )}
      </>
    );
  }
}

ImageGalleryItem.defaultProps = {
  path: '',
  alt: '',
};

ImageGalleryItem.propTypes = {
  path: PropTypes.string,
  alt: PropTypes.string,
};
