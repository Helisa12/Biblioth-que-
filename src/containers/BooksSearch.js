import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux' // methode Hooks
import { fetchBooks } from '../redux/action/actionFetchBooks'
import { addBook } from '../redux/action/actionAddBooks'
import { toast } from 'react-toastify'



const BooksSearch = () => {

    const [title, setTitle] = useState('');
    const state = useSelector(state => state.search);
    const dispatch = useDispatch()

    console.log(state)

    const handelSubmit = e => {
        e.preventDefault();
        dispatch(fetchBooks(title));   
    }
    // au niveau du handlSubmit c'est la qu'on va dispatcher l'action 

    
    const handleSave = (title,author) => {
        const bookToSave = { title, author}
        dispatch(addBook(bookToSave))

        // affiche la notification 
        toast.info('Livre enregistré avec succès !', {
            position: 'bottom-right',
            style: {
                backgroundColor: '#000000',
                color: '#ffffff',
                border: '2px solid',
                borderImage: 'linear-gradient(to right, #ff6a00, #ee0979) 1'
            }
        })

    }
    // cette action permet d'enregistrer le livre souhaite dans la biliothèque


    const displayFetchedBooks = state.isLoading ?
        // si le isLoading qui se trouve dans le state est passé a true dans ce cas on fait quelque chose
        (
            <div className='d-flex justify-content-center'>
                <div className='spinner-border text-info' role='status'>
                    <span className='sr-only'>Loding...</span>
                </div>
            </div>
        )// si on a un state.error qui contient quelque chose (!== ? ) qui doit different de la chaine caractére que nous avons definit par defaut dans ce cas on affiche autre chose 
        : state.error !== '' ?
            (
                <p>{state.error}</p>
            )
            // si on n'est pas dans ses deux cas alors on affiche ce qu'on a recuper avec le map() au niveau du Array
            :
            (
                state.fetchedBooks.map(data => {
                    return (
                        <div className='card mb-2' key={data.id}>
                            <div className='card-header'>
                                <h5 className='mb-0'>
                                    <button
                                        className='btn btn-link collapsed'
                                        data-bs-toggle='collapse'
                                        data-bs-target={`#collapse${data.id}`}
                                        aria-expanded='false'
                                        aria-controls={`collapse${data.id}`}
                                    >
                                        {data.volumeInfo.title}
                                    </button>
                                </h5>
                            </div>

                            <div
                                id={`collapse${data.id}`} className='collapse' data-parent="#accordion">
                                <div className='card-body'>
                                    {data.volumeInfo.imageLinks && data.volumeInfo.imageLinks.thumbnail && (
                                        <img
                                            src={data.volumeInfo.imageLinks.thumbnail}
                                            alt={data.volumeInfo.title} />
                                    )}


                                    <br />
                                    <h4 className='card-title'>Titre: {data.volumeInfo.title}</h4>
                                    <h5 className='card-title'>Auteurs: {data.volumeInfo.authors}</h5>
                                    <p className='card-text'>Description: {data.volumeInfo.description}</p>

                                    <a
                                        className='btn btn-outline-secondary'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        href={data.volumeInfo.previewLink}
                                    >
                                        Plus d'infos
                                    </a>
                                    <button
                                        className='btn btn-outline-secondary ml-3'
                                        onClick={() => handleSave(data.volumeInfo.title, data.volumeInfo.authors)}
                                    >Enregistrer
                                    </button>
                                </div>

                            </div>
                        </div>

                    )
                })
            )


    return (

        <main role='main' className=' mainTwo flex-grow-1'>
            <div className='container my-5 py-5 bg-light rounded-3'>
                <div className='text-center'>
                    <h1 className='display-4'>LIBRAIRIE</h1>
                    <p>Indiquer le sujet du livre à rechercher sur Google </p>

                    <form className="row justify-content-center g-3"
                        onSubmit={handelSubmit}
                    >

                        <div className='col-auto'>
                            <input
                                type="text"
                                className='form-control '
                                placeholder=' Quoi rechercher ?'
                                required
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />
                        </div>

                        <div className='col-auto'>
                            <button
                                className='btn btn-outline-primary'>Rechercher
                            </button>
                        </div>

                    </form>
                </div>
            </div>

            <div className='container' style={{ minHeight: '200px' }}>
                <div id='accordion'>
                    {displayFetchedBooks}
                </div>
            </div>
            
        </main>
    )
}

export default BooksSearch;


