import React, { useState } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import {  useDispatch, useSelector } from 'react-redux';
import './Options.css'

import { searchMovie } from '../state-management/actions';

// import store from '../state-management/index'

function Sorting() {
    const dispatch = useDispatch();
    // const sortBy = useSelector((state) => state.sortBy);
    const [realeaseRating, setRealiseRating] = useState('release_data')

    const onReleaseClick = () => {
        setRealiseRating('release_data');
        // dispatch(searchMovie(realeaseRating))
      }
  
      const onRatingClick = () => {
        setRealiseRating('vote_average')
      }
    return(
        <div className="options">
        <div>Options for your sort</div>
        <div>Sort by</div>
         <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" onClick={onReleaseClick} className="buttonRelease" >Release</Button>
                <Button variant="secondary" onClick={onRatingClick} className="buttonRating">Rating</Button>
        </ButtonGroup>
        </div>
    )
}

export default Sorting;