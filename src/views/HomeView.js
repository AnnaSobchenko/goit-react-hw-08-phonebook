import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMovieTrend } from 'services/movieService';

const HomeView = () => {
  const [movieTrend, setMovieTrend] = useState([]);

  useEffect(() => {
    getMovieTrend().then(movie => setMovieTrend(movie));
  }, []);
// console.log(movieTrend)
  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movieTrend.map(el => (
          <li key={el.id}>
            <Link className='link' to={'/movies/' + el.id}>
            {el.original_title ?<h3>{el.original_title}</h3>:<h3>{el.original_name}</h3>}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomeView;
