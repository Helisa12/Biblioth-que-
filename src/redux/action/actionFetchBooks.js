import { 
    FETCH_BOOKS_LOADING, 
    FETCH_BOOKS_SUCCESS, 
    FETCH_BOOKS_ERROR
} from '../constants'
import axios from 'axios'

const fetchBooksLoading = () => {
    return {
        type: FETCH_BOOKS_LOADING
    }
}
const fetchBooksSuccess = data => {
    return {
        type: FETCH_BOOKS_SUCCESS,
        payload: data
    }
}
const fetchBooksError =  error => {
    return {
        type: FETCH_BOOKS_ERROR,
        payload: error
    }
}

const GOOGLE_API_KEY =  'AIzaSyDFQYmT530HgispXOyt5LzKj83r7OVFFVk'
// cle api que j'ai créé 

export const fetchBooks = title => {
    return dispatch => {

        dispatch(fetchBooksLoading())

        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${GOOGLE_API_KEY}&maxResults=20`) 
        .then(res  => {
            //si je suis dans ce cas sa signifie que jai recuprer les infos et seront stocker la
            const bookItemsArray = res.data.items;
            dispatch(fetchBooksSuccess(bookItemsArray));
        })
        // en revanche si je reçois un msg d'erreur alors il va etre recupere via le catch
        .catch( error => {
            dispatch(fetchBooksError(error.message));
                console.log(error);
        }) 

    }
}
// mes action qui me permet de éventuel erreur et de reagir avc l'api google