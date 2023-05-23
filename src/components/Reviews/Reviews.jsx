import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'ApiService/ApiService';
import { AuthorName, ReviewsList, ReviewsItem } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchRev() {
      try {
        setError(false);
        const data = await fetchReviews(movieId);
        setReviews(data);
        if (data.length === 0) {
          setError("We don't have any reviews for this movie.");
        }
      } catch (error) {
        setError(
          'Ouch! Something went wrong: Reload the page and try again once.'
        );
      }
    }
    fetchRev();
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 && (
        <ReviewsList>
          {reviews.map(({ author, content, id }) => {
            return (
              <ReviewsItem key={id}>
                <AuthorName>Author: {author}</AuthorName>
                <p>{content}</p>
              </ReviewsItem>
            );
          })}
        </ReviewsList>
      )}
      {error}
    </>
  );
};

export default Reviews;
