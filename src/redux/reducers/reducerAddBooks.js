// c'est cette page qui va géréé notre state en fonction de l'action qui se trouve au niveau de const addBook (type:) je vais avoir besoin d'importer mon action 
import { ADD_BOOKS, DELETE_BOOKS, DELETE_ALL_BOOK } from "../constants";
import { v4 as uuiv4 } from "uuid";

//definir mon etat initiale

const initialState = {
    books: [] /* array vide ou vont etre stock mes livres */
}

const helperAddData = action => {
    return{
        id: uuiv4(),
        title: action.payload.title,
        author:  action.payload.author 
        /*qui va etre générer par un package qui se nomme uuid */
    }
}

const removeDataById = (state, id) => {
    const books = state.filter( book => book.id !== id)
    return books
} /*methode filter / colbackfuncton  expl: elle va passe dans objet (initialState) elle va verifier l'id si il est different va etre transfere dans un autre array mais si il est comparable elle va supp */


// reducer est une purfunction qui a pour argume le satte et l'action
const reducerAddBooks = ( state = initialState.books, action ) => {
    
    if (localStorage.getItem('booksData')) {
        state = JSON.parse(localStorage.getItem('booksData'))
    }
    
    switch (action.type) {
        // si on est dans le cas de ADD_BOOKS je prend le array via le spray operateur je recuper toute la date qui si trouve suite a sa je vais enregistrer toute les infos au niveau du payload
        case ADD_BOOKS:
           state = [...state, helperAddData(action)]
           localStorage.setItem('booksData', JSON.stringify(state))
           /*une fois enregistre ces valeur la au niveau de mon reduxstor je vais enregistrer un copier dans le localStorage */
           return state;

        case DELETE_BOOKS:
            state = removeDataById(state, action.payload);
            localStorage.setItem('booksData', JSON.stringify(state)) 
            return state;
            /* si je suis dans ce cas la que faire : je vais invoquer un helper qui va me permettre de retirer le id que je veux, celui que jai enregistre au niveau du payload et je fait une mise a jour */
        
        case DELETE_ALL_BOOK:
            state = [];
            localStorage.setItem('booksData', JSON.stringify(state))
            return state;  /* retourne un array vide  */

        default: return state
    }
}

export default reducerAddBooks