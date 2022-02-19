
import { TRENDING_SEARCH , 
    CONDITIONAL_SEARCH , 
    UP_NEXT_SEARCH , 
    BOX_SEARCH , 
    
} from "../../utils/actionTypes"
import { myAxios } from "../../utils/axios"

export const getTrendingMovies = ()=>{   
    return (dispatch) => {
        myAxios('GET' , '3/trending/movie/week')
        .then((res)=>{
            
            dispatch({
                type: TRENDING_SEARCH , 
                payload: res.data.results
            })
        })
        .catch((err)=>{
            console.log('Error while getting trending movies' , err)
        })
    }

}

export const getMovieByCategory = (genre)=>{
    return (dispatch)=>{
        myAxios('GET' , '3/discover/movie' , `&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}&with_watch_monetization_types=flatrate&page=2`)
        .then((res)=>{  
            // console.log(genre)          
            dispatch({
                type: CONDITIONAL_SEARCH , 
                payload: res.data.results
            })
        })
        .catch((err)=>{
            console.log('Error while getting conditional Content' , err)
        })
    }
}

export const getUpNextMovies = ()=>{
    return (dispatch) => {
        myAxios('GET' , '3/trending/movie/week' , '&page=3')
        .then((res) => {
            // console.log(res.data.results)
            dispatch({
                type: UP_NEXT_SEARCH , 
                payload: res.data.results
            })

        })
        .catch((err) => {
            console.log('Error while getting Up Next Content' , err)
        })
    }
}

export const getBoxMovies = ()=>{
    return (dispatch) => {
        myAxios('GET' , '3/trending/movie/week' , '&page=4')
        .then((res) => {
            // console.log(res.data.results)
            dispatch({
                type: BOX_SEARCH , 
                payload: res.data.results
            })

        })
        .catch((err) => {
            console.log('Error while getting Up Next Content' , err)
        })
    }
}

