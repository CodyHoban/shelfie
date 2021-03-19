import _ from 'lodash'
import {
    FETCH_SHELF,
    FETCH_SHELFS,
    CREATE_SHELF,
    EDIT_SHELF,
    DELETE_SHELF,
    CREATE_PRODUCT,
    SHELF_ERROR
} from '../actions/types'

const stateConfig = { 
    shelfList: [],
    selectedShelf: {},
    shelfError: false,
    shelfErrorMessage: '',
}

export default (state = stateConfig, action) => {
    switch(action.type) {
        case FETCH_SHELFS:
            return { ...state, shelfList: action.payload };
        case FETCH_SHELF:
            return { ...state, selectedShelf: action.payload };
        // case CREATE_SHELF:
        //     return { ...state, [action.payload.id]: action.payload };
        // case EDIT_SHELF:
        //     return { ...state, [action.payload.id]: action.payload };
        case DELETE_SHELF:
            return _.omit(state, action.payload);
        case SHELF_ERROR:
            return { 
                ...state,
                shelfError: action.payload, 
                shelfErrorMessage: action.message,
            };
        default:
            return state;
    }
};