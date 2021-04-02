import { getByTitle } from '@testing-library/dom'
import { bind } from 'lodash';
import shelfs from '../apis/shelfs'
import db from '../db'
import history from '../history'
import ErrorShow from '../components/shelfs/ErrorShow'
import { 
    SIGN_IN, 
    SIGN_OUT, 
    CREATE_SHELF,
    FETCH_SHELFS,
    FETCH_SHELF,
    DELETE_SHELF,
    EDIT_SHELF,
    CREATE_PRODUCT,
    SHELF_ERROR,
    REMOVE_SHELF_ERROR,
    SHELF_FORM_LOAD
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

// export const createShelf = (formValues) => async (dispatch, getState) => {
//     const { userId } = getState().auth;
//     const response = await shelfs.post('/shelfs', { ...formValues, userId });

//     dispatch({ type: CREATE_SHELF, payload: response.data });
//     history.push('/')
// };

export const createShelf = (formValues) => async (dispatch, getState) => {
    const { userId } =getState().auth;
    await db.collection('shelfies').add({ ...formValues, userId }).then((docRef) => {})

    

    // dispatch({ type: CREATE_SHELF, payload: response.data });
    history.push('/')
};

// let shelfiesCollection = db.collection('shelfies').get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//     console.log(`${doc.id} and ${doc.data()['title']}`)
//     });
//     });

export const fetchShelfs = () => async (dispatch) => {
    const responseArray = [];
    const response = await db.collection('shelfies').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            responseArray.push({ id: doc.id, shelfData: doc.data()})
            
        });
    });
    dispatch({ type: FETCH_SHELFS, payload: responseArray });
}

// export const fetchShelfs = () => async (dispatch) => {
//     const response = await shelfs.get('/shelfs');

//     dispatch({ type: FETCH_SHELFS, payload: response.data });
// }

// export const fetchShelf = (id) => async (dispatch) => {
//     const response = await shelfs.get(`/shelfs/${id}`);

//     dispatch({ type: FETCH_SHELF, payload: response.data });
// }

export const fetchShelf = (id) => async (dispatch) => {
    let individualShelfData;

    await db.collection('shelfies').doc(id).get().then((documentSnapshot) => {
        individualShelfData = documentSnapshot.data()
    });
    
    dispatch({ type: FETCH_SHELF, payload: individualShelfData })
}


// db.collection("users").doc(doc.id).update({foo: "bar"});
export const editShelf = (id, formValues) => async dispatch => {
    // const response = await shelfs.patch(`/shelfs/${id}`, formValues);
    try { 
        await db.collection('shelfies').doc(id).update({
            title: formValues.title, 
            description: formValues.description
        });
    
        // dispatch({ type: EDIT_SHELF, payload: response.data});
        history.push('/');
    } catch (error) {
        console.log(error.name);
        console.log('now we')
        dispatch({ type: SHELF_ERROR, payload:  true, message: error.name})  
    } 
}

export const toggleErrorState =() => dispatch => {
    console.log('are we in?');
    dispatch({ type: REMOVE_SHELF_ERROR, payload: false })
}

// export const deleteShelf = (id) => async (dispatch) => {
//     await shelfs.delete(`/shelfs/${id}`);

//     dispatch({ type: DELETE_SHELF, payload: id });
//     history.push('/');
// }

export const deleteShelf = (id) => async (dispatch) => {
    await db.collection('shelfies').doc(id).delete().then(() => {
    });

    dispatch({ type: DELETE_SHELF, payload: id });
    history.push('/');
}

export const createProduct= (formValues) => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await shelfs.post('/shelfs', { ...formValues, userId });

    dispatch({ type: CREATE_PRODUCT, payload: response.data });
}

export const load = data => ({ type: SHELF_FORM_LOAD, data })