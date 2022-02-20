import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import Container from './Container/Container';
// import HomeView from 'views/HomeView';
// import MoviesView from 'views/MoviesView';
// import MovieDetailsPage from 'views/MovieDetailsPage';
import './App.module.css';

const HomeView = lazy(() => import('views/HomeView'));
const MoviesView = lazy(() => import('views/MoviesView'));
const MovieDetailsPage = lazy(() => import('views/MovieDetailsPage'));

const App = () => {
  return (
    <>
      <AppBar />
      <Container>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route path="/" exact>
              <HomeView />
            </Route>
            <Route path="/movies/:movieId">
              <MovieDetailsPage />
            </Route>
            <Route exact path="/movies">
              <MoviesView />
            </Route>
          </Switch>
        </Suspense>
      </Container>
    </>
  );
};

export default App;
