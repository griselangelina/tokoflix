const initialState={
    isLogin: false,
    credit:0,
    collection:["00"],
    error:{
        message:'',
        status:false,
    }
}

const User = (state = {...initialState},action) =>{ /* initialstate nila default */
    switch (action.type){

        case 'SET_CREDIT':
        return{
            ...state,
            credit:action.payload
        }

        case 'GET_MOVIE_BUY':
        let collectionCheck=state.collection.indexOf(action.movielist) > -1;
         
            return{
                ...state,
                credit:action.payload,
                collection:action.movielist,
            }         
        default:
        
        
        return state
    }
}

export default User;