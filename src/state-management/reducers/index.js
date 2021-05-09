const initialState = {
    movies: [],
    sortBy: ' ',
    sortOrder: ' ',
    limit: '20'
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
        case 'LIMIT_FIVE':
            return {
                ...state,
                limit: '5'
            }    
        case 'LIMIT_TWENTY':
            return {
                ...state,
                limit: '20'
            } 
        case 'LIMIT_FIFTY':
            return {
                ...state,
                limit: '50'
            }       
        default:
            return state
    }
}
