import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense } from 'react';
import { fetchDetailsFilm } from 'ApiService/ApiService';
import { StyledLink } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const [error, setError] = useState(false);

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    async function fetchFilms() {
      try {
        setError(false);
        const data = await fetchDetailsFilm(movieId);
        setMovie(data);
      } catch (error) {
        setError(
          'Ouch! Something went wrong: Reload the page and try again once.'
        );
      }
    }
    fetchFilms();
  }, [movieId]);

  return (
    <>
      <StyledLink to={backLinkLocationRef.current}>Go back</StyledLink>
      {movie && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
            width="350px"
          />
          <div>
            <h2>
              {movie.title ?? movie.name}
              <span>({Number.parseInt(movie.release_date)})</span>
            </h2>
            <p>Rating: {movie.vote_average}</p>
            <h3>Owerview</h3>
            <p>{movie.overview}</p>
            <h4>Genres</h4>
            <div>
              {movie.genres.map(({ id, name }) => (
                <p key={id}>{name}</p>
              ))}
            </div>
          </div>
        </div>
      )}
      <div>
        <h3>Aditional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      {error}
    </>
  );
};

export default MovieDetails;
