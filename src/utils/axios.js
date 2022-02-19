import axios from "axios";

export const myAxios = (method , url , queryString = '' ,  data )=>{
    const API_KEY = 'd875af98dc494c2e95c403e30107dd85'
    return axios({
        method ,
        url: `https://api.themoviedb.org/${url}?api_key=${API_KEY}${queryString.length > 0 ? `&${queryString}`: ''}`,
        data
    })  

}


