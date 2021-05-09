const initialState = {
    movies: [],
    sortBy: ' ',
    sortOrder: ' '
}

export function reducer(state = initialState, action){
    // debugger
    switch(action.type){
        case 'SEARCH_MOVIE':
            return {
                 ... state,
                 movies: action.payload.data.data,
                }
        case 'SORT_BY_RELEASE_DATE':
            return {
                ...state,
                sortBy: 'release_date'
            }
        case 'SORT_BY_VOTE_AVERAGE':
            return {
                ...state,
                sortBy: 'vote_average'
            }
        case 'SORT_ORDER_DOWN_ALT':
            return {
                ...state,
                sortOrder: 'asc'
            }
        case 'SORT_ORDER_DOWN':
            return {
                ...state,
                sortOrder: 'desc'
            }
        default:
            return state
    }
}
