import { getCredits } from 'components/MoviesApp/pages/api/API';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as S from './styles';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const promise = getCredits(Number(id));
    promise.then(data => {
      setCast(data.cast);
    });
  }, [id]);

  return (
    <S.List>
      {cast.map(({ id, name, profile_path, character }) => {
        return (
          <S.CardWrapper key={id}>
            <S.ProfileImage
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt={name}
            />
            <S.Info>
              <S.Name>{name}</S.Name>
              <p>{character}</p>
            </S.Info>
          </S.CardWrapper>
        );
      })}
    </S.List>
  );
};
