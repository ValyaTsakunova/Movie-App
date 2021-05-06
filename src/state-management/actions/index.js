export const searchMovie = (text) => ({
    
    type: 'SEARCH_MOVIE',
    payload: text

});

// export const fetchMovie = text => dispatch => {
//     fetch(`https://reactjs-cdp.herokuapp.com/movies?search=${text}`)
//     .then(res =>
//         dispatch({
//         type: 'FETCH_MOVIE',
//         payload: res.data
//     }))
// }