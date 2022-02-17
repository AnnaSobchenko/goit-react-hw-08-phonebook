import axios from 'axios';

// export default function movieServices(query, page = 1) {
//     const KEY = '3a77cf2e264fc5181ae75199083953b5';
//     const BASE_URL = 'https://api.themoviedb.org/3/search/movie?';

//     return fetch(
//       `${BASE_URL}api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${query}&page=${page}`,
//     )
//       .then(res => {
//         if (!res.ok) {
//           throw new Error(res.status);
//         }
//         return res.json();
//       })
//       .catch(error => console.log(error));
//   }
//https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>

// adult: false
// backdrop_path: "/6qkeXdIEwqOuOWuxsomwnin2RdD.jpg"
// genre_ids: (4) [28, 12, 53, 10752]
// id: 476669
// media_type: "movie"
// original_language: "en"
// original_title: "The King's Man"
// overview: "As a collection of history's worst tyrants and criminal masterminds gather to plot a war to wipe out millions, one man must race against time to stop them."
// popularity: 4961.342
// poster_path: "/aq4Pwv5Xeuvj6HZKtxyd23e6bE9.jpg"
// release_date: "2021-12-22"
// title: "The King's Man"
// video: false
// vote_average: 7.2
// vote_count: 942

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getMovieTrend = () => {
  // axios.defaults.params = {
  //   api_key: '3a77cf2e264fc5181ae75199083953b5',
  // };
  return axios
    .get('/trending/movie/day?api_key=3a77cf2e264fc5181ae75199083953b5')
    .then(({ data }) => data.results)
    .catch(err => {
      throw err;
    });
};

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

export const getMovieID = id => {
  
  return axios
    // .get(`/movie/${id}?`)
    .get(`/movie/${id.movieId}?api_key=3a77cf2e264fc5181ae75199083953b5&language=en-US`)
    .then(({ data }) => data)
    .catch(err => {
      throw err;
    });
};

