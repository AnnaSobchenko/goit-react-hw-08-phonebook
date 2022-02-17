import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { getMovieID } from 'services/movieService';
// import img from '../img/default-movie.png';

const MovieDetailsPage = () => {
  const [movieId, setMovieId] = useState({});
  const id = useParams();
  const imgUrl = 'https://image.tmdb.org/t/p/w400/';

  useEffect(() => {
    id && getMovieID(id).then(movie => setMovieId(movie));
    // console.log(movieId);
  }, [id]);

  return (
    <>
      <p>Go back</p>

      {movieId.backdrop_path && (
        <img
          src={imgUrl + movieId.backdrop_path}
          alt={movieId.original_title}
        />
    //   ) : (
    //    <img src={ img} alt=" "/>
      )}
      <div>
        <h3>{movieId.original_title}</h3>
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
