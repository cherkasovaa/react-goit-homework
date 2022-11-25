import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'components/MoviesApp/api/API';

import * as S from './styles';
import { LackInfo } from '../LackInfo';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getReviews(Number(id)).then(data => setReviews(data.results));
  }, [id]);

  return reviews.length <= 0 ? (
    <LackInfo>We don't have any reviews for this movie.</LackInfo>
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

export default Reviews;
