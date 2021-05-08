import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import {  useDispatch } from 'react-redux';
import './SearchForm.css';

import { searchMovie } from '../state-management/actions';

function SearchForm(){
    const dispatch = useDispatch();
    const [parameter, setParameter] = useState('title');
    const [inputValue, setInputValue] = useState('');
    
    const onSubmit = (ev) => {
      ev.preventDefault();
      dispatch(searchMovie(inputValue, parameter));
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
          <p className="searchBy">Search by </p>
            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" onClick={onTitleClick} className="buttonTitle" >Title</Button>
                <Button variant="secondary" onClick={onGenreClick} className="buttonGenre">Genre</Button>
              </ButtonGroup>
             <Button type="submit" style={{ backgroundColor: '#800000', borderColor:'#4d0000'}} className="buttonSearch">Search</Button>  
          </div>
      </form>
    </>
  )
};

export default SearchForm;