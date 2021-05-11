import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountDownAlt } from '@fortawesome/free-solid-svg-icons';
import { faSortAmountDown } from '@fortawesome/free-solid-svg-icons';

import store from '../state-management/index';
import '../assets/styles/Options.css';

const sortDownAlt = <FontAwesomeIcon icon={faSortAmountDownAlt} />;
const sortDown = <FontAwesomeIcon icon={faSortAmountDown} />;

function Sorting() {
  const [releaseButton, setReleaseButton] = useState(false);
  const [ratingButton, setRatingButton] = useState(false);
  const [sortAltButton, setSortAltButton] = useState(false);
  const [sortDownButton, setSortDownButton] = useState(false);

  const onReleaseClick = () => {
    store.dispatch({ type: 'SORT_BY_RELEASE_DATE' });
    setReleaseButton(true);
    setRatingButton(false)
  }

  const onRatingClick = () => {
    store.dispatch({ type: 'SORT_BY_VOTE_AVERAGE' });
    setRatingButton(true);
    setReleaseButton(false);
  }

  const onSortDownAlt = () => {
    store.dispatch({ type: 'SORT_ORDER_DOWN_ALT' });
    setSortAltButton(true);
    setSortDownButton(false)
  }

  const onSortDown = () => {
    store.dispatch({ type: 'SORT_ORDER_DOWN' });
    setSortDownButton(true);
    setSortAltButton(false);
  }

  return (
    <div className="options">
      <div>Sort by</div>
      <div>
        <button onClick={onReleaseClick} className={releaseButton ? "active" : null} >Release</button>
        <button onClick={onRatingClick} className={ratingButton ? "active" : null}>Rating</button>
      </div>
      <div>Order</div>
      <div>
        <button onClick={onSortDownAlt} className={sortAltButton ? "active" : null} >{sortDownAlt} </button>
        <button onClick={onSortDown} className={sortDownButton ? "active" : null}>{sortDown}</button>
      </div>
    </div>
  )
}

export default Sorting;