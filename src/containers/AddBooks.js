import React, { useState } from 'react'
import { connect } from 'react-redux' 
import { addBook, deleteBook, deleteAllBook } from "../redux/action/actionAddBooks";



const AddBooks = ({ libraryData, addBook, deleteBook, deletAll}) => {  /*parti ou se trouve les props */

   //console.log(libraryData)

    const initialState = {
        title: '',
        author: ''
    }
    // objet  avec des proprieter qui définissant l'etat intial du formulaire 

    const [newData, setnewData] = useState(initialState);
    // console.log(newData);
    // useState est un HOOK qui permet d'initialiser et gerer l'etat local

    const handleSubmit = e => {
        e.preventDefault()
        // console.log(newData)
        addBook(newData)

        // vider le input
        setnewData(initialState)
    }
    // Fonction qui soumet le formulaire et preventDefault empeche de la page de ce recharger constament

    // verifier si on a de la data et si il ya on extrait la data 
    const displayData = libraryData.length > 0 ?
        libraryData.map(data => {
                return (
                    <li key={data.id} className='list-group-item list-group-item-light d-flex justify-content-between '>
                        <span><strong>Titre: </strong>{data.title}</span>
                        <span><strong>Auteur: </strong>{data.author}</span>
                        <span 
                        className='btn btn-danger'
                        onClick={() => deleteBook(data.id)}
                        >X</span>
                    </li>
                )
        })
    
    : <p className='data text-center '>Aucune data à afficher</p>

   // si on a aucun livre enregister le bouton effacer tous les livre ne sera pas visible grace a cette condition
    const deleteAllBooksBtn = libraryData.length > 0 &&
        <div className="d-flex justify-content-center">
            <button 
            className='btn btn-danger mt-4'
            onClick={() => deletAll()}
            >Effacer tous les livre</button>
        </div>



    return (
        
        <main role='main' className=' main flex-grow-1'> 
            <div className='containerUn my-5 py-5 bg-light rounded-3'>
                <div className='text-center'>
                    <h1 className='display-4'>BIBLIOTHEQUE</h1>
                    <p>Ajouter un livre </p>

                    <form className="row justify-content-center g-3" onSubmit={handleSubmit}>
                        <div className='col-auto'>
                            <input 
                                value={newData.title}
                                type="text" 
                                className='form-control '
                                placeholder='Titre: '
                                required
                                onChange={e => setnewData({...newData, title: e.target.value})}
                            />
                        </div>
                        <div className='col-auto'>
                            <input 
                                value={newData.author}
                                type="text" 
                                className='form-control'
                                placeholder='Auteur: '
                                required
                                onChange={e => setnewData({...newData, author: e.target.value})}
                            />
                        </div>
                        <div className='col-auto'>
                        <button className='btn btn-outline-primary'>Ajouter un livre</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className='container' style={{minHeight: '200px'}}>

                <div className="row">
                    <div className="col-md-12">
                        <ul className="list-group">
                           { displayData }
                        </ul>
                    </div> 

                    { deleteAllBooksBtn }  
                </div>
            </div>
        </main>
    )
}

const mapStateToProps = state => {
    return{
        libraryData: state.library
    }
} // fonction qui permet de selectionner une parti qu'on veut passer au composant en tant que props

const mapDispatchToProps = (dispatch) => {
    return {
       addBook: param => dispatch(addBook(param)),
       deleteBook: id => dispatch(deleteBook(id)),
       deletAll: () => dispatch(deleteAllBook())
    }
} // fonction qui permet de créer des fonctions dispatch qui seront des props et passer au composant

export default connect(mapStateToProps, mapDispatchToProps)(AddBooks)

// main avec plusieur div qui utulise du bootstrap en va creer un formulaire 

