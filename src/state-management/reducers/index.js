const initialState = {
    movies: []
}

export function reducer(state = initialState, action){
    switch(action.type){
        case 'SEARCH_MOVIE':
            return {
                 ... state,
                 movies: action.payload.data.data
                }
        default:
            return state
    }
}
