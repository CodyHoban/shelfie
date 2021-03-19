import _ from 'lodash'
import {
    FETCH_SHELF,
    FETCH_SHELFS,
    CREATE_SHELF,
    EDIT_SHELF,
    DELETE_SHELF,
    CREATE_PRODUCT
} from '../actions/types'

const stateConfig = { 
    shelfList: [],
    selectedShelf: {},

}

export default (state = stateConfig, action) => {
    switch(action.type) {
        case FETCH_SHELFS:
            return { ...state, shelfList: action.payload };
        case FETCH_SHELF:
            return { ...state, selectedShelf: action.payload };
        // case CREATE_SHELF:
        //     return { ...state, [action.payload.id]: action.payload };
        case EDIT_SHELF:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_SHELF:
            return _.omit(state, action.payload);
        default:
            return state;
    }
};