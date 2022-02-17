import Container from './Container/Container';
import AppBar from './AppBar/AppBar';
import { Route, Switch } from 'react-router-dom';
import HomeView from 'views/HomeView';
import MoviesView from 'views/MoviesView';
import MovieDetailsPage from 'views/MovieDetailsPage';
import  "./App.module.css"

const App = () => {
  return (
    <Container>
      <AppBar />
   

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
    </Switch> </Container>
  );
};

export default App;
