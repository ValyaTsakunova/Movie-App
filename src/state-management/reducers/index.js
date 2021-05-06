const initialState = {
    movies: [],
    text: ''
 }
 
 export function reducer(state = initialState, action){
     switch(action.type){
         case 'SEARCH_MOVIE':
             return {
                 ... state,
                 text: action.payload,
 
         }
         case 'FETCH_MOVIE':
             return {
                 ... state,
                 movies: action.payload
 
         }
 
         default:
             return state
     }
 }