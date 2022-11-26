import { getMovieById } from 'components/MoviesApp/api/API';
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import * as S from './styles';

const Info = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/react-goit-homework';

  useEffect(() => {
    getMovieById(Number(id)).then(data => setMovie(data));
  }, [id]);

  const renderYear = () => {
    return movie.release_date
      ? `${movie.original_title} (${new Date(
          movie.release_date
        ).getFullYear()})`
      : `${movie.original_title}`;
  };

  return (
    <S.Main>
      <S.Button to={backLinkHref}>Go Back</S.Button>
      <S.Wrapper>
        <div>
          {movie.poster_path && (
            <S.Poster
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title}
            />
          )}
        </div>
        <S.InfoWrapper>
          <S.Box>
            <S.Title>{renderYear()}</S.Title>
            <S.GenreBox>
              {movie.hasOwnProperty('genres') &&
                movie.genres.map(({ id, name }) => <p key={id}>{name}</p>)}
            </S.GenreBox>
            <p>User score: {movie.vote_count}</p>
          </S.Box>
          <S.Box>
            <S.Title as="h2" fontSize="1.5rem">
              Overview
            </S.Title>
            <p>{movie.overview}</p>
          </S.Box>
          <S.Box>
            <S.Title as="h2" fontSize="1.5rem">
              Additional Information
            </S.Title>
            <S.SubLinksContainer>
              <S.SubInformation to="cast">Cast</S.SubInformation>
              <S.SubInformation to="reviews">Reviews</S.SubInformation>
            </S.SubLinksContainer>
          </S.Box>
          <Outlet />
        </S.InfoWrapper>
      </S.Wrapper>
    </S.Main>
  );
};

export default Info;
