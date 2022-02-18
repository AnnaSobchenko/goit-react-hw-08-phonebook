import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import { useEffect, useState } from 'react';
import { Link, Route, useParams } from 'react-router-dom';
import { getCast, getMovieID, getReviews } from 'services/movieService';
import s from './views.module.css';
// import img from '../img/default-movie.png';
import photo from '../img/photo.jpg';

const MovieDetailsPage = () => {
  const [movieId, setMovieId] = useState({});
  const [castId, setCastId] = useState([]);
  const [reviewsId, setReviewsId] = useState([]);
  const id = useParams();
  const imgUrl = 'https://image.tmdb.org/t/p/w400/';

  useEffect(() => {
    id && getMovieID(id).then(movie => setMovieId(movie));
    // console.log(movieId);
  }, [id]);

  useEffect(() => {
    movieId.id && getCast(movieId.id).then(cast => setCastId(cast));
  }, [movieId.id]);

  useEffect(() => {
    movieId.id && getReviews(movieId.id).then(review => setReviewsId(review));
  }, [movieId.id]);

  console.log(movieId.id);
  console.log(castId);
  console.log(reviewsId);
  return (
    <>
      <Link className={s.goback}>&#8656; Go back</Link>
      <div className={s.moviepage}>
        {movieId.backdrop_path && (
          <img
            src={imgUrl + movieId.backdrop_path}
            alt={movieId.original_title}
          />
          //   ) : (
          //    <img src={ img} alt=" "/>
        )}
        <div>
          <h2>{movieId.original_title}</h2>
          {Number(movieId.vote_average) > 0 && (
            <p>User Score: {movieId.vote_average * 10}%</p>
          )}
          <h4>Overview</h4>
          <p>{movieId.overview}</p>

          <div>
            <h4>Genres</h4>
            <p>
              {movieId.genres
                ? movieId.genres.map(el => el.name + ', ')
                : movieId.genres}
            </p>
          </div>
        </div>
      </div>
      <div className={s.castreviews}>
        <h3>Additional information:</h3>

        <Link to={'/movies/' + movieId.id + '/reviews'}>&#8658; Reviews</Link>
        <Link to={'/movies/' + movieId.id + '/cast'}>&#8658; Cast</Link>
      </div>
      <div className={s.infocastreview}>
        <Route path={'/movies/' + movieId.id + '/reviews'}>
          <p>{reviewsId}</p>
        </Route>
        <Route path={'/movies/' + movieId.id + '/cast'}>
          <div className={s.cast}>
            {castId.map(el => (
              <li key={el.id}>
              {el.profile_path?(  <img className={s.profile} src={imgUrl+el.profile_path} alt="&#128526;" /> ) : (
             <img className={s.profile} src={ photo} alt=" "/>
        )}
                <h3>{el.name}</h3>
                {el.character&&<p>character: {el.character}</p>}
              </li>
            ))}
          </div>
        </Route>
      </div>
      {/* <ul>
          {movieId.map(el => (
            <li key={el.id}>
              <Link to={"/movies/"+el.id}>
                <h3>{`${el.original_title}`}</h3>
              </Link>
            </li>
          ))}
        </ul> */}
    </>
  );
};

export default MovieDetailsPage;
