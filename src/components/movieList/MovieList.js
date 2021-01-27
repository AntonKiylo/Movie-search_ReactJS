import './MovieList.css';
import heartIcon from '../../assets/heart_icon.png';

const MovieList = ({ movies, favoriteMovies, setFavoriteMovie }) => {
  const addFavoriteMovie = (movie) => {
    setFavoriteMovie([...favoriteMovies, movie]);
  }

  return (
    <div className='movie-list'>
      {movies.map(movie => {
        return (
          <div className='poster' key={movie.imdbID}>
            <img src={movie.Poster} alt='Poster' className='poster-img' />
            <div className='poster-footer' onClick={() => addFavoriteMovie(movie)}>
              <p>Add to Favorites</p>
              <img src={heartIcon} alt='heart-icon' />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MovieList;