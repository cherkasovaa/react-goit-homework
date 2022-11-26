import { useState } from 'react';
import { Feedback } from 'components/Feedback/Feedback';
import { BoxStyled } from 'App.styled';
import { Phonebook } from 'components/Phonebook/Phonebook';
import { ImageGalleryApp } from 'components/ImageGallery/ImageGalleryApp';
import { Navigation } from 'components/Navigation/Navigation';
import { MoviesApp } from 'components/MoviesApp';
import { useEffect } from 'react';

export const App = () => {
  const KEY = 'project';
  const isLocalData = localStorage.getItem(KEY);
  const parseData = JSON.parse(isLocalData);

  const [project, setProject] = useState(parseData ?? 'feedback');

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(project));
  }, [project]);

  const showProject = id => setProject(id);

  const getView = value => {
    switch (value) {
      case 'phonebook':
        return <Phonebook />;
      case 'feedback':
        return <Feedback />;
      case 'imagegalleryapp':
        return <ImageGalleryApp />;
      case 'movieapp':
        return <MoviesApp />;
      default:
        return '';
    }
  };

  const btns = ['Phonebook', 'Feedback', 'Image Gallery App', 'Movie App'];
  return (
    <>
      {<Navigation showProject={showProject} list={btns} />}
      <BoxStyled>
        {getView(project)}
        {/* <Routes>
          <Route path={location.path + '/phonebook'} element={<Phonebook />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/imagegalleryapp" element={<ImageGalleryApp />} />
          <Route path={location.path + '/movieapp'} element={<MoviesApp />} />
        </Routes> */}
      </BoxStyled>
    </>
  );
};
