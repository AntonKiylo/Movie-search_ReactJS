import './FavoriteMoviesList.css';

const FavoriteMoviesList = ({ favoriteMovies, setFavoriteMovie, saveToLocalStorage }) => {
  const removeMovie = (favoriteMovie) => {
    const saveMovie = favoriteMovies.filter(item => item.imdbID !== favoriteMovie.imdbID); 
    setFavoriteMovie(saveMovie);
    saveToLocalStorage(saveMovie);
  }

  return (
    <div className='favorite-movie-list'>
      {favoriteMovies.map(favoriteMovie => {
        return (
          <div className='favorite-poster' key={favoriteMovie.imdbID}>
            <img src={favoriteMovie.Poster} width='220' height='350' alt='Poster' />
            <div className='favorite-poster-footer' onClick={() => removeMovie(favoriteMovie)}>
              <p>Remove from Favorites</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FavoriteMoviesList;