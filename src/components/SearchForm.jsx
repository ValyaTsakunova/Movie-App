import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import Movies from './Movies';
import './SearchForm.css';


function SearchForm(){
    const [movies, setMovies] = useState([]);
    const [parameter, setParameter] = useState('title');
    const [inputValue, setInputValue] = useState('');
    
    const onSubmit = (ev) => {
        ev.preventDefault();

        fetch(`https://reactjs-cdp.herokuapp.com/movies?search=${inputValue}&searchBy=${parameter}&limit=50`)
        .then(data => data.json())
        .then((res) => {
            console.log(res);
            setMovies(res.data)
        });
        // inputValue.length > 0 ? dispatch(inputValue) : setInputValue('');
    
        setInputValue('');
    }
    const onTitleClick = () => {
      setParameter('title');
    }
    const onGenreClick = () => {
      setParameter('genres');
    }

    const onInputChange = (ev) => {
        setInputValue(ev.target.value);
    }
  return (
    <>
      <form onSubmit={onSubmit}  className="form">
        <input 
          value={inputValue} 
          onChange={onInputChange} 
          placeholder="Search your movie here..." 
          className="searchInput" />
          
          <div className="buttons">
          <p className="searchBy">Search by  </p>
              <button className="buttonTitle" type="button" onClick={onTitleClick}>Title</button>
              <button className="buttonGenre" type="button" onClick={onGenreClick}>Genre</button>
            
             <Button type="submit" style={{ backgroundColor: '#800000', borderColor:'#4d0000'}} className="buttonSearch">Search</Button>  
          </div>
      </form>
      {movies.length > 0 ? <Movies movies={movies} /> : ''}
    </>
  )
};

export default connect()(SearchForm);
