// l'endroit au nous allons avoir notre state que nous allons passer en tans que argument a notre state

import {
    FETCH_BOOKS_LOADING,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_ERROR
} from '../constants'

const initialState = {
    isLoading: false,
    fetchedBooks: [],
    error: ''
}

const reducerFetchedBooks = (state = initialState, action) => {
    switch (action.type) {
        //premiere etape 
        case FETCH_BOOKS_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_BOOKS_SUCCESS: // si je suis dans ce cas je recupere mon state mon true je le change en false a la plce de mon array je recuper la data
            return {
                ...state,
                isLoading: false,
                fetchedBooks: action.payload,
                error: ''
            }
        case FETCH_BOOKS_ERROR: // sii je suis dans ce dernier le login reste false et que je n'ai pas recupere de data le array vide 
            return {
                ...state,
                isLoading: false,
                fetchedBooks: [],
                error: action.payload
            }

        default: return state

    }
}

export default reducerFetchedBooks;