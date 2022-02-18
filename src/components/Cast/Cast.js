import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/movieService';

const Cast = () => {
//     const [castId, setCastId] = useState([]);
//   const {movieId} = useParams();
// //   const imgUrl = 'https://image.tmdb.org/t/p/w400/';
// useEffect(() => {
//     movieId && getCast(movieId).then(cast => setCastId(cast));
// }, [movieId]);
// console.log(castId);
// console.log(movieId)
  return (
    <>
      <h3> Cast</h3>
    </>
  );
};

export default Cast;
