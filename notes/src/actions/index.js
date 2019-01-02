// Imports
import axios from 'axios';

// Action Type Exports
// C - Create Note
export const CREATING_NOTE = 'CREATING_NOTE';
export const NEW_NOTE_SUCCESS = 'NEW_NOTE_SUCCESS'
export const NEW_NOTE_FAIL = 'NEW_NOTE_FAIL';
// R - Read All
export const FETCHING_NOTES = 'FETCHING_NOTES';
export const NOTES_FETCH_SUCCESS = 'NOTES_FETCH_SUCCESS';
export const NOTES_FETCH_FAIL = 'NOTES_FETCH_FAIL';

// R - Read One
export const FETCHING_NOTE = 'FETCHING_NOTE';
export const NOTE_FETCH_SUCCESS = 'NOTE_FETCH_SUCCESS';
export const NOTE_FETCH_FAIL = 'NOTE_FETCH_FAIL';

// Action Creators

// C - Create

export const createNote = () => dispatch => {
    dispatch({
        type: CREATING_NOTE
    });
}

// R - Read All
export const fetchNotes = () => dispatch => {
    dispatch({
        type: FETCHING_NOTES
    })

    axios
        .get('https://fe-notes.herokuapp.com/note/get/all')
        .then(data => {
            return dispatch({
                type: NOTES_FETCH_SUCCESS,
                payload: data.data
            });
        })
        .catch(err => {
            return dispatch({
                type: NOTES_FETCH_SUCCESS,
                payload: err
            });
        });
};

// R - Read One
export const fetchNote = id => dispatch => {
    dispatch({ type: FETCHING_NOTE });

    axios
        .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
        .then(data => {
            return dispatch({
                type: NOTE_FETCH_SUCCESS,
                payload: data.data
            });
        })
        .catch(err => {
            return dispatch({
                type: NOTE_FETCH_SUCCESS,
                payload: err
            });
        });
}

