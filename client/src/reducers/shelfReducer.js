import _ from 'lodash'
import {
    FETCH_SHELF,
    FETCH_SHELFS,
    CREATE_SHELF,
    EDIT_SHELF,
    DELETE_SHELF,
    CREATE_PRODUCT
} from '../actions/types'

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_SHELFS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case FETCH_SHELF:
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_SHELF:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_SHELF:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_SHELF:
            return _.omit(state, action.payload);

        default:
            return state;
    }
};