const initialState = {
    movies: [],
    sortBy: {
        status: 'release_data'
    }
}

export function reducer(state = initialState, action){
    // debugger
    switch(action.type){
        case 'SEARCH_MOVIE':
            return {
                 ... state,
                 movies: action.payload.data.data,
                 
                }
        default:
            return state
    }
}
