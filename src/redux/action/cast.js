
import axios from 'axios';



export const getCast = (id) =>{
    return (dispatch) =>{
        dispatch(getCastRequest())
        axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=d9a71e71b104f390279db19e8ab2d2cf&language=en_US`)
        .then(response => {
           dispatch(getCastSuccess(response.data.cast))
           //console.log(response.data.cast)
        })
        .catch(()=>{
            const error = 'gagal fetch data'
            dispatch(getCastError(error))
        })

    }
}


export const getCastRequest = () =>{
    return{
        type:'GET_CAST_REQUEST'
    }
}


export const getCastSuccess = (payload) =>{
    return{
        type:'GET_CAST_SUCCESS',
        payload
    }
}

export const getCastError = (payload) =>{
    return{
        type:'GET_CAST_ERROR',
        payload
    }
}

