import { bind } from 'lodash';
import shelfs from '../apis/shelfs'
import db from '../db'
import history from '../history'
import { 
    SIGN_IN, 
    SIGN_OUT, 
    CREATE_SHELF,
    FETCH_SHELFS,
    FETCH_SHELF,
    DELETE_SHELF,
    EDIT_SHELF,
    CREATE_PRODUCT
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
    const response = await db.collection('shelfies').add({ ...formValues, userId }).then((docRef) => {})

    

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

    const response = await db.collection('shelfies').doc(id).get().then((documentSnapshot) => {
        console.log(documentSnapshot.data())
        individualShelfData = documentSnapshot.data()
    });

    console.log(individualShelfData)
    
    dispatch({ type: FETCH_SHELF, payload: individualShelfData })
}

export const editShelf = (id, formValues) => async dispatch => {
    const response = await shelfs.patch(`/shelfs/${id}`, formValues);

    dispatch({ type: EDIT_SHELF, payload: response.data});
    history.push('/');
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