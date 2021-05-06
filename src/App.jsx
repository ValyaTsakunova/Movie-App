import React from 'react';
import {  useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import Movies from './components/Movies';
import NotFound from './components/NotFound'
import './App.css';

function App() {
  const movies = useSelector((state) => state.movies);
  return (
    <div className="wrapper">
    <div className="title"><p>Movie App</p></div>
    <Switch>
      <Route path="/" exact>
          <SearchForm />
          {movies.length > 0 ? <Movies movies={movies}/> : ''}
      </Route>
      <Route >
          <NotFound/>
      </Route>
    </Switch>
      
    </div>
  );
}

export default App;
