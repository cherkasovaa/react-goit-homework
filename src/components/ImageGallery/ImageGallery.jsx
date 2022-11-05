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
  items: PropTypes.arrayOf(PropTypes.object),
};
