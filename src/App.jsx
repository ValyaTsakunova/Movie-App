import React from 'react';
import {  useSelector } from 'react-redux';
import SearchForm from './components/SearchForm';
import Movies from './components/Movies';
import './App.css';

function App() {
  const movies = useSelector((state) => state.movies);
  return (
    <div className="wrapper">
    <div className="title"><p>Movie App</p></div>
      <SearchForm />
      {movies.length > 0 ? <Movies movies={movies}/> : ''}
    </div>
  );
}

export default App;
