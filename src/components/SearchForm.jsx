import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import Movies from './Movies';
import './SearchForm.css';


function SearchForm(){
    const [movies, setMovies] = useState([]);
    const [inputValue, setInputValue] = useState('');
    
    const onSubmit = (ev) => {
        ev.preventDefault();

        fetch(`https://reactjs-cdp.herokuapp.com/movies?search=${inputValue}&searchBy=title&limit=50`)
        .then(data => data.json())
        .then((res) => {
            console.log(res);
            setMovies(res.data)
        });
        // inputValue.length > 0 ? dispatch(inputValue) : setInputValue('');
    
        setInputValue('');
    }

    const onInputChange = (ev) => {
        setInputValue(ev.target.value);
    }
  return (
    <>
      <form onSubmit={onSubmit}  className="form">
        <input value={inputValue} onChange={onInputChange} placeholder="Type here.." className="searchInput" />
        <Button variant="success" type="submit">Search</Button>
      </form>
      {movies.length > 0 ? <Movies movies={movies} /> : ' '}
    </>
  )
};

export default connect()(SearchForm);
