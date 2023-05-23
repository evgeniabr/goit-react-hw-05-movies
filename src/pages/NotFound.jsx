import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <p>
      This page was not found, please return to
      <Link to="/">Home page</Link>
    </p>
  );
};

export default NotFound;
