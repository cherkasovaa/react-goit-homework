import PropTypes from 'prop-types';
import { Modal } from './Modal';
import { ImageGalleryItemStyled, ImageStyled } from './styles';
import { useState } from 'react';

export const ImageGalleryItem = ({ path, alt }) => {
  const { small, regular } = path;
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <ImageGalleryItemStyled>
        <ImageStyled src={small} alt={alt} onClick={toggleModal} />
      </ImageGalleryItemStyled>
      {isOpen && <Modal path={regular} alt={alt} onClose={toggleModal} />}
    </>
  );
};

ImageGalleryItem.defaultProps = {
  path: {},
  alt: '',
};

ImageGalleryItem.propTypes = {
  path: PropTypes.objectOf(PropTypes.string),
  alt: PropTypes.string,
};
