import MoviesViewItem from 'components/MoviesViewItem';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getMovieTrend } from 'services/movieService';

const HomeView = () => {
  const location = useLocation();
  const [movieTrend, setMovieTrend] = useState([]); 

  useEffect(() => {
    getMovieTrend().then(movie => setMovieTrend(movie));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MoviesViewItem movies={movieTrend} location={location} />      
    </>
  );
};

export default HomeView;
