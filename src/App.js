import { useEffect, useState } from 'react';
import './App.css';
import MovieListHeader from './components/movieListHeader/MovieListHeader';
import MovieList from './components/movieList/MovieList';
import FavoriteMoviesHeader from './components/favoriteMoviesHeader/FavoriteMoviesHeader';
import FavoriteMoviesList from './components/favoriteMoviesList/FavoriteMoviesList';

const App = () => {
  const [movies, setMovies] = useState([
    {
      "Title": "Terminator 2: Judgment Day",
      "Year": "1991",
      "imdbID": "tt0103064",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    },
    {
      "Title": "The Terminator",
      "Year": "1984",
      "imdbID": "tt0088247",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZDY2MjQ1OWViZjFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      "Title": "Terminator 3: Rise of the Machines",
      "Year": "2003",
      "imdbID": "tt0181852",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTk5NzM1ODgyN15BMl5BanBnXkFtZTcwMzA5MjAzMw@@._V1_SX300.jpg"
    },
    {
      "Title": "Terminator Salvation",
      "Year": "2009",
      "imdbID": "tt0438488",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BODBlOTJhZjItMGRmYS00YzM1LWFmZTktOTJmNDMyZTBjMjBkXkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SX300.jpg"
    },
    {
      "Title": "Terminator Genisys",
      "Year": "2015",
      "imdbID": "tt1340138",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjM1NTc0NzE4OF5BMl5BanBnXkFtZTgwNDkyNjQ1NTE@._V1_SX300.jpg"
    },
    {
      "Title": "Terminator: Dark Fate",
      "Year": "2019",
      "imdbID": "tt6450804",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOWExYzVlZDgtY2E1ZS00NTFjLWFmZWItZjI2NWY5ZWJiNTE4XkEyXkFqcGdeQXVyMTA3MTA4Mzgw._V1_SX300.jpg"
    },
    {
      "Title": "Terminator: The Sarah Connor Chronicles",
      "Year": "2008–2009",
      "imdbID": "tt0851851",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZGE2ZDgyOWUtNzdiNS00OTI3LTkwZGQtMTMwNzM4YWUxNGNhXkEyXkFqcGdeQXVyNjU2NjA5NjM@._V1_SX300.jpg"
    },
    {
      "Title": "Terminator 3: Rise of the Machines",
      "Year": "2003",
      "imdbID": "tt0364056",
      "Type": "game",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjA5OTk4MTQwNV5BMl5BanBnXkFtZTgwMzkxNTEwMTE@._V1_SX300.jpg"
    },
    {
      "Title": "Terminator 2: Judgment Day",
      "Year": "1991",
      "imdbID": "tt0244839",
      "Type": "game",
      "Poster": "https://m.media-amazon.com/images/M/MV5BN2FhOTQ2MmQtNTY0OC00NWYyLThjNjMtZmZiOTBmYTY4MmM2XkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg"
    },
    {
      "Title": "Lady Terminator",
      "Year": "1989",
      "imdbID": "tt0095483",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTg5NTA1NzEtNWNiNy00ZTc4LWJhZTgtYmJkODZhYWI3NmQ4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    }
  ]);
  const [favoriteMovies, setFavoriteMovie] = useState([]);

  const [searchValue, setSearchValue] = useState('');

  // const getMovieRequest = async (searchValue) => {
  //   const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=42e8410c`;

  //   const response = await fetch(url);
  //   const responseJSON = await response.json();

  //   if (responseJSON.Search) {
  //     setMovies(responseJSON.Search);
  //   }
  // }

  // useEffect(() => {
  //   getMovieRequest(searchValue);
  // }, [searchValue]);

  const saveToLocalStorage = (movie) => {
    localStorage.setItem('movie-app-favorites', JSON.stringify(movie));
  }

  const getFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('movie-app-favorites'));
  }

  useEffect(() => {
    if (localStorage.getItem('movie-app-favorites')) {
      setFavoriteMovie(getFromLocalStorage);
    } else {
      return;
    }
  }, []);

  return (
    <>
      <MovieListHeader searchValue={searchValue} setSearchValue={setSearchValue} />
      <MovieList movies={movies} favoriteMovies={favoriteMovies} setFavoriteMovie={setFavoriteMovie} saveToLocalStorage={saveToLocalStorage} />
      <FavoriteMoviesHeader />
      <FavoriteMoviesList favoriteMovies={favoriteMovies} setFavoriteMovie={setFavoriteMovie} saveToLocalStorage={saveToLocalStorage} />
    </>
  );
}

export default App;