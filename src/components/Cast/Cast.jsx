import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchActorList } from 'ApiService/ApiService';
import {
  Actor,
  ActorInfo,
  ActorsList,
  CastTitle,
  Foto,
  InfoTitle,
} from './Cast.styled';

const Cast = () => {
  const [actorsList, setActorsList] = useState(null);
  const { movieId } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchActors() {
      try {
        setError(false);
        const data = await fetchActorList(movieId);
        setActorsList(data);
      } catch (error) {
        setError(
          'Ouch! Something went wrong: Reload the page and try again once.'
        );
      }
    }
    fetchActors();
  }, [movieId]);

  return (
    <>
      <CastTitle>Actors</CastTitle>
      <ActorsList>
        {actorsList &&
          actorsList.map(({ id, profile_path, name, character }) => (
            <Actor key={id}>
              <Foto
                src={`https://image.tmdb.org/t/p/original${profile_path}`}
                alt={name}
              />
              <ActorInfo>
                <InfoTitle>Name:</InfoTitle>
                <span>{name}</span>
                <InfoTitle>Character:</InfoTitle>
                <span>{character}</span>
              </ActorInfo>
            </Actor>
          ))}
      </ActorsList>
      {error}
    </>
  );
};
export default Cast;
