import { Link } from "react-router-dom";
import img from '../img/default-movie.png';

const imgUrl = 'https://image.tmdb.org/t/p/w400/';

const MoviesViewItem = ({movies, location}) => {
    return (  <ul>
        {movies.map(el => (
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
      </ul> );
}
 
export default MoviesViewItem;