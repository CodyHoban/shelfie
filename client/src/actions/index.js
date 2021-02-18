import shelfs from '../apis/shelfs'
import history from '../history'
import { 
    SIGN_IN, 
    SIGN_OUT, 
    CREATE_SHELF,
    FETCH_SHELFS,
    FETCH_SHELF,
    DELETE_SHELF,
    EDIT_SHELF
    } from './types';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT,
    };
};

export const createShelf = (formValues) => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await shelfs.post('/shelfs', { ...formValues, userId });

    dispatch({ type: CREATE_SHELF, payload: response.data });
    history.push('/')
};

export const fetchShelfs = () => async (dispatch) => {
    const response = await shelfs.get('/shelfs');

    dispatch({ type: FETCH_SHELFS, payload: response.data });
}

export const fetchShelf = (id) => async (dispatch) => {
    const response = await shelfs.get(`/shelfs/${id}`);

    dispatch({ type: FETCH_SHELF, payload: response.data });
}

export const editShelf = (id, formValues) => async dispatch => {
    const response = await shelfs.patch(`/shelfs/${id}`, formValues);

    dispatch({ type: EDIT_SHELF, payload: response.data});
    history.push('/');
}

export const deleteShelf = (id) => async (dispatch) => {
    await shelfs.delete(`/shelfs/${id}`);

    dispatch({ type: DELETE_SHELF, payload: id });
}