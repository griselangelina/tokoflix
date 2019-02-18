const initialState={
    isLogin: false,
    detail:"",
    recommend:[],
    similar:[],
    isLoadingDetail:false,
    isLoadingRec:false,
    isLoadingSimilar:false,

    error:{
        message:'',
        status:false,
    }
}

const Detail = (state = {...initialState},action) =>{ /* initialstate nila default */
    switch (action.type){

        case 'GET_DETAIL_REQUEST':
            return{
                ...state,
                isLoadingDetail:true,

            }
        case 'GET_DETAIL_SUCCESS':
            return{
                ...state,
                isLoadingDetail:false,
                detail:action.payload.data,
            }
       
        case 'GET_DETAIL_ERROR':
            return{
                ...state,
                isLoadingDetail:false,
                error:{
                    message:action.payload,
                    status:true
                }

            }  
        case 'GET_RECOMMEND_REQUEST':
            return{
                ...state,
                isLoadingRec:true,

            }
        case 'GET_RECOMMEND_SUCCESS':
            return{
                ...state,
                isLoadingRec:false,
                recommend:action.payload,
            }
       
        case 'GET_RECOMMEND_ERROR':
            return{
                ...state,
                isLoadingRec:false,
                error:{
                    message:action.payload,
                    status:true
                }

            }
        case 'GET_SIMILAR_REQUEST':
            return{
                ...state,
                isLoadingSimilar:true,

            }
        case 'GET_SIMILAR_SUCCESS':
            return{
                ...state,
                isLoadingSimilar:false,
                similar:action.payload,
            }
       
        case 'GET_SIMILAR_ERROR':
            return{
                ...state,
                isLoadingSimilar:false,
                error:{
                    message:action.payload,
                    status:true
                }

            }                       
        default:
        return state
    }
}

export default Detail;