import { getCredits } from 'components/MoviesApp/api/API';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LackInfo } from '../LackInfo';

import unknown from './unknown_human.png';

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

  const renderProfileImage = path =>
    path ? `https://image.tmdb.org/t/p/w500${path}` : unknown;

  return (
    <S.List>
      {cast.length <= 0 ? (
        <LackInfo>We have no information about the cast</LackInfo>
      ) : (
        cast.map(({ id, name, profile_path, character }) => {
          return (
            <S.CardWrapper key={id}>
              <S.ProfileImage
                src={renderProfileImage(profile_path)}
                alt={name}
              />
              <S.Info>
                <S.Name>{name}</S.Name>
                <p>{character}</p>
              </S.Info>
            </S.CardWrapper>
          );
        })
      )}
    </S.List>
  );
};
