// import React from 'react';
// import { ButtonGroup, Button } from 'react-bootstrap';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSortAmountDownAlt } from '@fortawesome/free-solid-svg-icons';
// import { faSortAmountDown } from '@fortawesome/free-solid-svg-icons';

// import store from '../state-management/index';

// const sortDownAlt = <FontAwesomeIcon icon={faSortAmountDownAlt} />;
// const sortDown = <FontAwesomeIcon icon={ faSortAmountDown } />;

// function MovieOrder() {
//     const sortDownAlt = () => {
//         store.dispatch({type: 'SORT_ORDER_DOWN_ALT'} );
//       }

//       const sortDown = () => {
//         store.dispatch({type: 'SORT_ORDER_DOWN'} );
//       }
//     return(
//         <ButtonGroup aria-label="Basic example">
//                 <Button variant="secondary" onClick={sortDownAlt} className="buttonRelease" >{sortDownAlt}</Button>
//                 <Button variant="secondary" onClick={sortDown} className="buttonRating">{sortDown}</Button>
//         </ButtonGroup>
//     )
// }

// export default MovieOrder;