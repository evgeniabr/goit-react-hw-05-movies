import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  padding: 24px;
`;

export const LinkMovie = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
`;

export const MoviesItem = styled.li`
  flex-basis: calc((100% - 80px) / 4);
  margin: 10px;
`;

export const Title = styled.h4`
  text-content: center;
`;
