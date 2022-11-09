import { useState } from 'react';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Searchbar } from 'components/ImageGallery/Searchbar';
import { AppStyled } from 'components/ImageGallery/styles';
import { Button } from 'components/ImageGallery/Button';
import { Loader } from 'components/ImageGallery/Loader';
import { useEffect } from 'react';
import { useRef } from 'react';

export const ImageGalleryApp = () => {
  const API_KEY = '2cqmmjl9b_w_-koNZOfoDKCv9BREiEPanFNqgtp6lAI';

  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (query === '') {
      return;
    }

    setIsLoading(true);

    fetch(
      `https://api.unsplash.com/search/photos?client_id=${API_KEY}&query=${query}&page=${page}`
    )
      .then(res => res.json())
      .then(data => {
        setItems(items => [...items, ...data.results]);
        setIsLoading(false);
      });
  }, [query, page]);

  const onSearch = value => {
    setItems([]);
    setQuery(value);
    setPage(1);
  };

  return (
    <AppStyled>
      <Searchbar onSubmit={onSearch} />
      {<ImageGallery items={items} />}
      {isLoading && <Loader />}
      {items.length > 0 && !isLoading && (
        <Button onClick={() => setPage(page => page + 1)} />
      )}
    </AppStyled>
  );
};
