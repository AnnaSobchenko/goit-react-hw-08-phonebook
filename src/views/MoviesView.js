import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getFilterMovies } from 'services/movieService';
import img from '../img/default-movie.png';
import s from "./views.module.css"

const MoviesView = () => {
  const [moviesView, setMovieiesView] = useState([]);
  const [query, setQuery] = useState('');
  const imgUrl = 'https://image.tmdb.org/t/p/w400/';

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e)
    setQuery(e.target.value);
  };

  useEffect(() => {
    getFilterMovies(query).then(movie => setMovieiesView(movie));
  }, [query]);

  return (
    <>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <input
          className={s.SearchFormInput}
          type="text"
          value={query}
          placeholder="Search movies"
          onChange={handleChange}
        ></input>
        <button className={s.SearchFormButton} type="button">&#x1f50d;</button>
      </form>
      <ul>
        {moviesView.map(el => (
          <li key={el.id}>
            <Link className="link" to={'/movies/' + el.id}>
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

// const HomeView = () => {
//   const [movieTrend, setMovieTrend] = useState([]);
//   const imgUrl = 'https://image.tmdb.org/t/p/w400/';

//   useEffect(() => {
//     getMovieTrend().then(movie => setMovieTrend(movie));
//   }, []);
// // console.log(movieTrend)
//   return (
//     <>
//       <h1>Trending today</h1>
//       <ul>
//         {movieTrend.map(el => (
//           <li key={el.id}>
//             <Link className='link' to={'/movies/' + el.id}>
//             {el.poster_path && <img src={imgUrl+el.poster_path} alt={el.title} width='140'/>}
//             {el.original_title ?<h3>{el.original_title}</h3>:<h3>{el.original_name}</h3>}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default HomeView;
