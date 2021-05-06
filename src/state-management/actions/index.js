export const searchMovie = (text, parameter) => (dispatch, getState) => {
    fetch(`https://reactjs-cdp.herokuapp.com/movies?search=${text}&searchBy=${parameter}&limit=50`)
    .then(resp => resp.json()).then(data =>
        dispatch({
        type: 'SEARCH_MOVIE',
        payload: {
            data,
        }
    }))
}

