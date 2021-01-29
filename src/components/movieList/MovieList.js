import './MovieList.css';
import heartIcon from '../../assets/heart_icon.png';

const MovieList = ({ movies, favoriteMovies, setFavoriteMovie, saveToLocalStorage }) => {
  
  const addFavoriteMovie = (movie) => {
    const newFavoriteMovie = [...favoriteMovies, movie];
    setFavoriteMovie(newFavoriteMovie);
    saveToLocalStorage(newFavoriteMovie);
  }

  return (
    <div className='movie-list'>
      {movies.map(movie => {
        return (
          <div className='poster' key={movie.imdbID}>
            <img src={movie.Poster} alt='Poster' className='poster-img' />
            <div className='poster-footer' onClick={() => addFavoriteMovie(movie)}>
              <p>Add to Favorites</p>
              <img src={heartIcon} alt='heart-icon' className='heart-icon' />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MovieList;