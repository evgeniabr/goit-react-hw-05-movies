import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { fetchSearchMovies } from 'ApiService/ApiService';
import { Loader } from 'components/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');

  const query = searchParams.get('query') ?? '';
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!query) {
      return;
    }
    setIsLoading(true);

    async function fetchFilms() {
      try {
        const response = await fetchSearchMovies(query);
        setMovies(response);
        if (!response.length) {
          return setError(`No results found.`);
        }

        setIsLoading(false);
      } catch (error) {
        setError(
          'Ouch! Something went wrong: Reload the page and try again once.'
        );
      }
    }
    fetchFilms();
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();
    const currentQuery = event.currentTarget.elements.query.value;
    setSearchParams({ query: currentQuery });
    if (!currentQuery) {
      setSearchParams({});
      setMovies([]);
      return 'enter a valid request!';
    }
    setSearchParams({ query: currentQuery });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query"></input>
        <button type="submit">Search</button>
      </form>
      {isLoading && <Loader />}
      {movies && <MoviesList movies={movies} location={location} />}
      {error}
    </>
  );
};

export default Movies;
