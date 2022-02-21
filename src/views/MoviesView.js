import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { getFilterMovies } from 'services/movieService';
import qs from 'query-string';
import s from './views.module.css';
import MoviesViewItem from 'components/MoviesViewItem';

const MoviesView = () => {
  const history = useHistory();
  const location = useLocation();
  const { query } = qs.parse(location.search);
  const [moviesView, setMovieiesView] = useState([]);
  const [input, setInput] = useState('');  
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
        <MoviesViewItem movies={moviesView} location={location} />    
    </>
  );
};

export default MoviesView;
