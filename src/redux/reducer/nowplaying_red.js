const initialState={
    isLogin: false,
    nowplaying:[],
    nowplayingpage:0,
    perpage:4,
    isLoading:false,
    error:{
        message:'',
        status:false,
    }
}

const Counter = (state = {...initialState},action) =>{ /* initialstate nila default */
    switch (action.type){

        case 'GET_NOWPLAY_DATA_REQUEST':
            return{
                ...state,
                isLoading:true,

            }
        case 'GET_NOWPLAY_DATA_SUCCESS':
            return{
                ...state,
                isLoading:false,
                nowplaying:action.payload,
                nowplayingpage:action.payload.length/state.perpage,
            }
       
        case 'GET_NOWPLAY_DATA_ERROR':
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

export default Counter;