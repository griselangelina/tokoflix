
import axios from 'axios';



export const getDetail = (id) =>{
    return (dispatch) =>{
        dispatch(getDetailRequest())
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=d9a71e71b104f390279db19e8ab2d2cf&language=en_US`)
        .then(response => {
            dispatch(getDetailSuccess(response))
           //console.log(response.data)
        })
        .catch(()=>{
            const error = 'gagal fetch data'
            dispatch(getDetailError(error))
        })

    }
}


export const getDetailRequest = () =>{
    return{
        type:'GET_DETAIL_REQUEST'
    }
}


export const getDetailSuccess = (payload) =>{
    return{
        type:'GET_DETAIL_SUCCESS',
        payload
    }
}

export const getDetailError = (payload) =>{
    return{
        type:'GET_DETAIL_ERROR',
        payload
    }
}




export const getRecommend = (id) =>{
    return (dispatch) =>{
        dispatch(getRecommedRequest())
        axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=d9a71e71b104f390279db19e8ab2d2cf&language=en_US`)
        .then(response => {
            dispatch(getRecommedSuccess(response.data.results))
        })
        .catch(()=>{
            const error = 'gagal fetch data'
            dispatch(getRecommedError(error))
        })

    }
}


export const getRecommedRequest = () =>{
    return{
        type:'GET_RECOMMEND_REQUEST'
    }
}


export const getRecommedSuccess = (payload) =>{
    return{
        type:'GET_RECOMMEND_SUCCESS',
        payload
    }
}

export const getRecommedError = (payload) =>{
    return{
        type:'GET_RECOMMEND_ERROR',
        payload
    }
}


export const getSimilar = (id) =>{
    return (dispatch) =>{
        dispatch(getSimilarRequest())
        axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=d9a71e71b104f390279db19e8ab2d2cf&language=en_US`)
        .then(response => {
            dispatch(getSimilarSuccess(response.data.results))
        })
        .catch(()=>{
            const error = 'gagal fetch data'
            dispatch(getSimilarError(error))
        })

    }
}


export const getSimilarRequest = () =>{
    return{
        type:'GET_SIMILAR_REQUEST'
    }
}


export const getSimilarSuccess = (payload) =>{
    return{
        type:'GET_SIMILAR_SUCCESS',
        payload
    }
}

export const getSimilarError = (payload) =>{
    return{
        type:'GET_SIMILAR_ERROR',
        payload
    }
}

