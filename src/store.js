import {createStore,combineReducers,compose, applyMiddleware} from 'redux';
import dataReducer from './redux/reducer/nowplaying_red';
import detailReducer from './redux/reducer/detail_red';
import castReducer from './redux/reducer/cast_red';
import userReducer from './redux/reducer/user_red';

import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    data: dataReducer,
    detail:detailReducer,
    cast:castReducer,
    user:userReducer,
});


const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
    )
    )

export default store;