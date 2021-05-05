import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './SearchForm.css';

function SearchForm(){
    const [inputValue, setInputValue] = useState('');
    const onSubmit = (ev) => {
        ev.preventDefault();
        
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
    </>
  )
};

export default SearchForm;
