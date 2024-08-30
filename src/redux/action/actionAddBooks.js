import { ADD_BOOKS, DELETE_BOOKS, DELETE_ALL_BOOK } from "../constants";


export const addBook = data => {  
    return {
    type: ADD_BOOKS,
    payload: data  /* object qui  permet d'jouter un livre*/
   
    }
}

export const deleteBook = id => {
    return {
        type: DELETE_BOOKS,
        payload: id
    }
}
// on niveau de map nous avons utimiser un id danc c'est ce dernier sur le quel on va s'appuie pour recupere les infos a supprime


export const deleteAllBook = () => {
    return {
        type: DELETE_ALL_BOOK ,
    
    }
}