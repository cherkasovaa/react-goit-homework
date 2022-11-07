import PropTypes from 'prop-types';
import { ImageGalleryItem } from './ImageGalleryItem';
import { ImageGalleryStyled } from './styles';

export const ImageGallery = ({ items }) => {
  return (
    <ImageGalleryStyled>
      {items.map(({ id, urls, alt_description }) => (
        <ImageGalleryItem key={id} path={urls} alt={alt_description} />
      ))}
    </ImageGalleryStyled>
  );
};

ImageGallery.defaultProps = {
  items: [],
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      urls: PropTypes.shape({
        small: PropTypes.string,
        regular: PropTypes.string,
      }),
      alt_description: PropTypes.string,
    })
  ),
};
