import { configureStore } from '@reduxjs/toolkit'
import reducerAddBooks from './reducers/reducerAddBooks'
import { thunk } from 'redux-thunk';
import reducerFetchedBooks from './reducers/reducerFetchBooks';





const store = configureStore ({
    reducer: {
        library: reducerAddBooks,
        search: reducerFetchedBooks  
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});



export default store;

// explication : configureStore depuis @reduxjs/toolkit permet de créer le store. on lui passe un objet contenant les reducteurs, il va ce chager de tous combiner 
