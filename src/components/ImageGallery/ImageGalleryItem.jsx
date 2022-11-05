import { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from './Modal';
import { ImageGalleryItemStyled, ImageStyled } from './styles';

export class ImageGalleryItem extends Component {
  state = {
    isOpen: false,
  };

  toggleModal = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
    }));
  };

  render() {
    const { path, alt } = this.props;
    const { isOpen } = this.state;
    const { small, regular } = path;

    return (
      <>
        <ImageGalleryItemStyled>
          <ImageStyled src={small} alt={alt} onClick={this.toggleModal} />
        </ImageGalleryItemStyled>
        {isOpen && (
          <Modal path={regular} alt={alt} onClose={this.toggleModal} />
        )}
      </>
    );
  }
}

ImageGalleryItem.defaultProps = {
  path: {},
  alt: '',
};

ImageGalleryItem.propTypes = {
  path: PropTypes.objectOf(PropTypes.string),
  alt: PropTypes.string,
};
