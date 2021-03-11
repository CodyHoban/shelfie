import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from './authReducer'
import shelfReducer from './shelfReducer'
import productReducer from './productReducer'


export default combineReducers({
    auth: authReducer,
    form: formReducer,
    shelfs: shelfReducer,
    product: productReducer
});