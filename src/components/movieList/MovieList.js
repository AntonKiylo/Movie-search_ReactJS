import './MovieList.css';

const MovieList = ({ movies }) => {
  return (
    <div className='movie-list'>
      {movies.map(movie => {
        return (
          <div className='poster'>
            <img src={movie.Poster} key={movie.imdbID} alt='Poster' />
            <div className='poster-footer'>footer</div>
          </div>
        );
      })}
    </div>
  );
}

export default MovieList;