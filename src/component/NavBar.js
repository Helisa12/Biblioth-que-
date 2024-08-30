import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header >
      <div className='d-flex flex-column flex-md-row p-3'>
        <h4 className='mb-0 me-md-auto'>
          <a href="/" className='text-decoration-none '>BIBLIOTHEQUE </a>
        </h4>

        <nav className='btn-group'>
          <Link to="/" className='btn btn-light'>Accueil</Link>
          <Link to="/search" className='btn btn-light'>Recherche</Link>
        </nav>
      </div> 
    </header>
  )
}

export default NavBar


//rafce raccourcis
// permet d'afficher le navbar en stylisant avec du bootsrtap
// ok