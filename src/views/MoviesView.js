import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getFilterMovies } from 'services/movieService';
import qs from 'query-string';
import img from '../img/default-movie.png';
import s from './views.module.css';

const MoviesView = () => {
  const history = useHistory();
  const location = useLocation();
  const { query } = qs.parse(location.search);
  const [moviesView, setMovieiesView] = useState([]);
  const [input, setInput] = useState('');
  const imgUrl = 'https://image.tmdb.org/t/p/w400/';
  const setSearch = input => {
    history.push({ pathname: '/movies', search: '?query=' + input });
  };

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!input) return;   
    setSearch(input);
  };

  useEffect(() => {
    query && getFilterMovies(query).then(movie => setMovieiesView(movie));
  }, [query]);

  return (
    <>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <input
          className={s.SearchFormInput}
          type="text"
          value={input}
          placeholder="Search movies"
          onChange={handleChange}
        ></input>
        <button className={s.SearchFormButton} type="button">
          &#x1f50d;
        </button>
      </form>
      <ul>
        {moviesView.map(el => (
          <li key={el.id}>
            <Link
              className="link"
              to={{ pathname: '/movies/' + el.id, state: { from: location } }}
            >
              {el.poster_path ? (
                <img src={imgUrl + el.poster_path} alt={el.title} width="140" />
              ) : (
                <img src={img} alt={el.title} width="140" />
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

export default MoviesView;
