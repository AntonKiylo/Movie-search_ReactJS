import './MovieListHeader.css';

const MovieListHeader = ({ searchValue, setSearchValue }) => {
  const onHandlerChange = (e) => {
    setSearchValue(e.target.value);
  }

  return (
    <div className='movie-list-leader'>
      <label htmlFor='movieSearch'>Movies</label>
      <input
        id='movieSearch'
        value={searchValue}
        onChange={onHandlerChange}
        placeholder='Type to search...'
      />
    </div>
  );
}

export default MovieListHeader;