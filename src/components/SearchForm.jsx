import React from 'react';
import { Button } from 'react-bootstrap';

function SearchForm(){
    const onSubmit = (ev) => {
        ev.preventDefault();
    }
  return (
    <>
      <form onSubmit={onSubmit}  className="form">
        <input placeholder="Type here.." className="searchInput" />
        <Button variant="success" type="submit">Search</Button>
      </form>
    </>
  )
};

export default SearchForm;
