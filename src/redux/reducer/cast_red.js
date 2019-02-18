const initialState={
    isLogin: false,
    cast:[],
    isLoading:false,
    error:{
        message:'',
        status:false,
    }
}

const Cast = (state = {...initialState},action) =>{ /* initialstate nila default */
    switch (action.type){

        case 'GET_CAST_REQUEST':
            return{
                ...state,
                isLoading:true,

            }
        case 'GET_CAST_SUCCESS':
            return{
                ...state,
                isLoading:false,
                cast:action.payload,
            }
       
        case 'GET_CAST_ERROR':
            return{
                ...state,
                isLoading:false,
                error:{
                    message:action.payload,
                    status:true
                }

            }                       
        default:
        return state
    }
}

export default Cast;