import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'components/MoviesApp/pages/api/API';

import * as S from './styles';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const promise = getReviews(Number(id));
    promise.then(data => {
      setReviews(data.results);
    });
  }, [id]);

  return reviews.length <= 0 ? (
    <S.Info>We don't have any reviews for this movie.</S.Info>
  ) : (
    <S.List>
      {reviews.map(({ id, author, content }) => {
        return (
          <S.CardWrapper key={id}>
            <S.Name>{author}</S.Name>
            <p>{content}</p>
          </S.CardWrapper>
        );
      })}
    </S.List>
  );
};
