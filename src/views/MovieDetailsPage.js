import { useEffect, useState } from 'react';
import { Link, Route, useLocation, useParams } from 'react-router-dom';
import { getCast, getMovieID, getReviews } from 'services/movieService';
import s from './views.module.css';
import photo from '../img/photo.jpg';
import { Notify } from 'notiflix';
import { useHistory } from 'react-router-dom';

const MovieDetailsPage = () => {
  const history = useHistory();
  const location = useLocation();
  const [movieId, setMovieId] = useState({});
  const [castId, setCastId] = useState([]);
  const [reviewsId, setReviewsId] = useState('');
  const id = useParams();
  const imgUrl = 'https://image.tmdb.org/t/p/w400/';

  const handleGoBack = () => {
    history.push(location.state.from);
  };

  useEffect(() => {
    id &&
      getMovieID(id)
        .then(movie => setMovieId(movie))
        .catch(err =>
          Notify.failure(
            '❌ Sorry, there are no movies matching your search query. Please try again.'
          )
        );
  }, [id]);

  useEffect(() => {
    movieId.id &&
      getCast(movieId.id)
        .then(cast => setCastId(cast))
        .catch(err => console.log(err));
  }, [movieId.id]);

  useEffect(() => {
    movieId.id &&
      getReviews(movieId.id)
        .then(review => setReviewsId(review.results[0].content))
        .catch(err => {
          setReviewsId.content = "We don't have any for this movie";
        });
  }, [movieId.id]);

  return (
    <>
      <button type="button" onClick={handleGoBack} className={s.goback}>
        &#8656; Go back
      </button>
      <div className={s.moviepage}>
        {movieId.backdrop_path && (
          <img
            src={imgUrl + movieId.backdrop_path}
            alt={movieId.original_title}
          />
        )}
        <div className={s.detaileMovie}>
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
        <Link
          to={{
            pathname: '/movies/' + movieId.id + '/reviews',
            state: { from: location.state.from },
          }}
        >
          &#8658; Reviews
        </Link>
        <Link
          to={{
            pathname: '/movies/' + movieId.id + '/cast',
            state: { from: location.state.from },
          }}
        >
          &#8658; Cast
        </Link>
      </div>
      <div className={s.infocastreview}>
        <Route path={'/movies/' + movieId.id + '/reviews'}>
          {reviewsId ? (
            <p>{reviewsId}</p>
          ) : (
            <p>We don't have any for this movie</p>
          )}
        </Route>
        <Route path={'/movies/' + movieId.id + '/cast'}>
          <div className={s.cast}>
            {castId.map(el => (
              <li key={el.id}>
                {el.profile_path ? (
                  <img
                    className={s.profile}
                    src={imgUrl + el.profile_path}
                    alt="&#128526;"
                  />
                ) : (
                  <img className={s.profile} src={photo} alt=" " />
                )}
                <h3>{el.name}</h3>
                {el.character && <p>character: {el.character}</p>}
              </li>
            ))}
          </div>
        </Route>
      </div>
    </>
  );
};

export default MovieDetailsPage;
