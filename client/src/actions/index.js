import shelfs from '../apis/shelfs'
import { SIGN_IN, SIGN_OUT } from './types';

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

export const createShelf = (formValues) => async (dispatch) => {
    shelfs.post('/shelfs', formValues);
};
