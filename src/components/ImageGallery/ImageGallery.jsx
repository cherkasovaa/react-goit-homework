import { ImageGalleryItem } from './ImageGalleryItem';
import { ImageGalleryStyled } from './styles';

export const ImageGallery = ({ items }) => {
  return (
    <ImageGalleryStyled>
      {items.map(({ id, urls, alt_description }) => (
        <ImageGalleryItem
          key={id}
          path={urls.small}
          description={alt_description}
        />
      ))}
    </ImageGalleryStyled>
  );
};
