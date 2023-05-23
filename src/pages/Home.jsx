import MoviesList from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetch } from 'ApiService/ApiService';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const location = useLocation();

  useEffect(() => {
    async function fetchFilms() {
      try {
        const data = await fetch();
        setMovies(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchFilms();
  }, []);
  return (
    <>
      <h2>Trending today</h2>
      {movies && <MoviesList movies={movies} location={location} />}
    </>
  );
};

export default Home;
