import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountDownAlt } from '@fortawesome/free-solid-svg-icons';
import { faSortAmountDown } from '@fortawesome/free-solid-svg-icons';

import store from '../state-management/index';
import './Options.css';

const sortDownAlt = <FontAwesomeIcon icon={ faSortAmountDownAlt } />;
const sortDown = <FontAwesomeIcon icon={ faSortAmountDown } />;

function Sorting() {
    const onReleaseClick = () => {
        store.dispatch({type: 'SORT_BY_RELEASE_DATE'} );
        // debugger
      }
  
      const onRatingClick = () => {
        store.dispatch({type: 'SORT_BY_VOTE_AVERAGE'} );
      }

      const onSortDownAlt = () => {
        store.dispatch({type: 'SORT_ORDER_DOWN_ALT'} );
      }

      const onSortDown = () => {
        store.dispatch({type: 'SORT_ORDER_DOWN'} );
      }

    return(
        <div className="options">
        <div>Options for your sort</div>
        <div>Sort by</div>
         <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" onClick={onReleaseClick} className="buttonRelease" >Release</Button>
                <Button variant="secondary" onClick={onRatingClick} className="buttonRating">Rating</Button>
        </ButtonGroup>
        <div>Order</div>
         <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" onClick={onSortDownAlt} className="buttonRelease" >{sortDownAlt} </Button>
                <Button variant="secondary" onClick={onSortDown} className="buttonRating">{sortDown}</Button>
        </ButtonGroup>
        </div>
    )
}

export default Sorting;