import React from 'react';
import {  useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import Sorting from './components/Options';
import Limit from './components/Limit';
import Movies from './components/Movies';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  const movies = useSelector((state) => state.movies);
  return (
    <div className="wrapper">
    <div className="title"><p>Movie App</p></div>
    <Switch>
      <Route path="/">
          <>
          <div className="header">
            <Limit />
            <SearchForm />
            <Sorting />
          </div>
          {movies.length > 0 ? <Movies movies={movies}/> : ''}
          </>
      </Route>
      <Route >
          <NotFound/>
      </Route>
    </Switch>
    </div>
  );
}

export default App;
