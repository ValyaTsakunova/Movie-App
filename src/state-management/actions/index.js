export const searchMovie = (text, parameter) => (dispatch, getState) => {
    const sortBy = getState().sortBy;
    const sortOrder = getState().sortOrder;
    const limit = getState().limit;
    fetch(`https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortBy}&sortOrder=${sortOrder}&search=${text}&searchBy=${parameter}&limit=${limit}`)
        .then(resp => resp.json()).then(data =>
            dispatch({
                type: 'SEARCH_MOVIE',
                payload: {
                    data,
                }
            }))
}

