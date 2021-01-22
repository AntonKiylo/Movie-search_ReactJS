import './MovieList.css';

const MovieList = ({ movies }) => {
  return (
    <div className='movie-list'>
      {movies.map(movie => <img src={movie.Poster} alt='Poster'/>)}
    </div>
  );
}

export default MovieList;