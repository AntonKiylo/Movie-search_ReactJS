import './MovieList.css';
import heartIcon from '../../assets/heart_icon.png';

const MovieList = ({ movies }) => {
  return (
    <div className='movie-list'>
      {movies.map(movie => {
        return (
          <div className='poster' key={movie.imdbID}>
            <img src={movie.Poster} alt='Poster' />
            <div className='poster-footer'>
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