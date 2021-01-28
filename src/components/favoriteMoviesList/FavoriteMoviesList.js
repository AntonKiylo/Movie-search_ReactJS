import './FavoriteMoviesList.css';

const FavoriteMoviesList = ({ favoriteMovies, setFavoriteMovie }) => {
  const removeMovie = (favoriteMovie) => {
    setFavoriteMovie(favoriteMovies.filter(item => item.imdbID !== favoriteMovie.imdbID));
  }

  return (
    <div className='favorite-movie-list'>
      {favoriteMovies.map(favoriteMovie => {
        return (
          <div className='favorite-poster' key={favoriteMovie.imdbID}>
            <img src={favoriteMovie.Poster} alt='Poster' />
            <div className='favorite-poster-footer' onClick={() => removeMovie(favoriteMovie)}>
              <p>Remove</p>
              {/* <img src={heartIcon} alt='heart-icon' /> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FavoriteMoviesList;