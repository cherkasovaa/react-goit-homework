import { Component } from 'react';
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
    const { path, description } = this.props;
    return (
      <>
        <ImageGalleryItemStyled>
          <ImageStyled
            src={path.small}
            alt={description}
            onClick={this.openModal}
          />
        </ImageGalleryItemStyled>
        {this.state.isOpen && (
          <Modal
            path={path.regular}
            alt={description}
            onClose={this.closeModal}
          />
        )}
      </>
    );
  }
}
