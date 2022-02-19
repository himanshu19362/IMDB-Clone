import { TRENDING_SEARCH , 
    CONDITIONAL_SEARCH , 
    UP_NEXT_SEARCH , 
    BOX_SEARCH , 
    
} from "../../utils/actionTypes"


const INITIAL_STATE = {
    trendingMovies: [] , 
    conditionalMovies: [] , 
    upNextMovies: [] , 
    boxMovies: [] , 
    
}



const reducer = (state = INITIAL_STATE , action) => { 
    switch(action.type){
        case TRENDING_SEARCH:
            return {
                ...state , 
                trendingMovies: action.payload
            }
        case CONDITIONAL_SEARCH:
            return {
                ...state , 
                conditionalMovies: action.payload , 
                conditionalPageNo: 0
            }
        case UP_NEXT_SEARCH:
            
            return {
                ...state , 
                upNextMovies: action.payload
            }
        case BOX_SEARCH:            
            return {
                ...state , 
                boxMovies: action.payload
            }
        default:
            return state    
    }    
}

export default reducer
