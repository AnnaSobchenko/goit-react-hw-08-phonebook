import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getMovieTrend } from 'services/movieService';

const HomeView = () => {
  const location = useLocation();
  const [movieTrend, setMovieTrend] = useState([]);
  const imgUrl = 'https://image.tmdb.org/t/p/w400/';

  useEffect(() => {
    getMovieTrend().then(movie => setMovieTrend(movie));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movieTrend.map(el => (
          <li key={el.id}>
            <Link
              className="link"
              to={{ pathname: '/movies/' + el.id, state: { from: location } }}
            >
              {el.poster_path && (
                <img src={imgUrl + el.poster_path} alt={el.title} />
              )}
              {el.original_title ? (
                <h3>{el.original_title}</h3>
              ) : (
                <h3>{el.original_name}</h3>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomeView;
