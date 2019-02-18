import axios from 'axios';


export const getNowPlayData = () =>{
    return (dispatch) =>{
        dispatch(getNowPlayRequest())
        axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=d9a71e71b104f390279db19e8ab2d2cf&language=en_US')
        .then(response => {
            dispatch(getNowPlaySuccess(response.data.results))
        })
        .catch(()=>{
            const error = 'gagal fetch data'
            dispatch(getNowPlayError(error))
        })

    }
}


export const getNowPlayRequest = () =>{
    return{
        type:'GET_NOWPLAY_DATA_REQUEST'
    }
}


export const getNowPlaySuccess = (payload) =>{
    return{
        type:'GET_NOWPLAY_DATA_SUCCESS',
        payload
    }
}

export const getNowPlayError = (payload) =>{
    return{
        type:'GET_NOWPLAY_DATA_ERROR',
        payload
    }
}







