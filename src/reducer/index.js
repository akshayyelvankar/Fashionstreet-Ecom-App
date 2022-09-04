import handleCart from './handlerCart';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
   cart:handleCart
})

export default rootReducer;