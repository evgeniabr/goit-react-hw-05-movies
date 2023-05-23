import { List, LinkMovie, Title, MoviesItem } from './MoviesList.styled';

const MoviesList = ({ movies, location }) => {
  return (
    <List>
      {movies.map(({ id, title, name, poster_path }) => (
        <MoviesItem key={id}>
          <LinkMovie to={`/movies/${id}`} state={{ from: location }}>
            <img
              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
              alt={title ?? name}
            />
            <Title>{title ?? name}</Title>
          </LinkMovie>
        </MoviesItem>
      ))}
    </List>
  );
};

export default MoviesList;
