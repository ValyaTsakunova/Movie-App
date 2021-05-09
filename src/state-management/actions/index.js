export const searchMovie = (text, parameter) => (dispatch, getState) => {
    // debugger
    const sortBy = getState().sortBy;
    const sortOrder = getState().sortOrder;
    console.log(sortBy)
    fetch(`https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortBy}&sortOrder=${sortOrder}&search=${text}&searchBy=${parameter}&limit=50`)
    .then(resp => resp.json()).then(data =>
        dispatch({
        type: 'SEARCH_MOVIE',
        payload: {
            data,
        }
    }))
}

// https://reactjs-cdp.herokuapp.com/movies?sortBy=release_date&sortOrder=asc&search=harry&searchBy=title