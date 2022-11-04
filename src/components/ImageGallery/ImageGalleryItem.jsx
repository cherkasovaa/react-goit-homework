import { ImageGalleryItemStyled, ImageStyled } from './styles';

export const ImageGalleryItem = ({ path, description }) => {
  return (
    <ImageGalleryItemStyled>
      <ImageStyled src={path} alt={description} />
    </ImageGalleryItemStyled>
  );
};
