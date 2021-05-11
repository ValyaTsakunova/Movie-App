import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import {  useDispatch } from 'react-redux';
import './SearchForm.css';

import { searchMovie } from '../state-management/actions';

function SearchForm(){
    const dispatch = useDispatch();
    const [parameter, setParameter] = useState('title');
    const [inputValue, setInputValue] = useState('');
    const [title, setTitle] = useState(false);
    const [genre, setGenre] = useState(false);
    
    const onSubmit = (ev) => {
      ev.preventDefault();
      dispatch(searchMovie(inputValue, parameter));
      setInputValue('');
    }

    const onTitleClick = () => {
      setParameter('title');
      setTitle(true);
      setGenre(false);
    }

    const onGenreClick = () => {
      setParameter('genres');
      setTitle(false);
      setGenre(true);
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
          <p className="searchBy">Search by </p>
            <div>
                <button onClick={onTitleClick} className={title ? "active" : null} type="button">Title</button>
                <button onClick={onGenreClick} className={genre ? "active" : null} type="button">Genre</button>
              </div>
             <Button type="submit" style={{ backgroundColor: '#800000', borderColor:'#4d0000'}} className="buttonSearch">Search</Button>  
          </div>
      </form>
    </>
  )
};

export default SearchForm;