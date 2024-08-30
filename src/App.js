import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import AddBooks from './containers/AddBooks';
import BooksSearch from './containers/BooksSearch';
import { ToastContainer } from 'react-toastify';




function App() {
  return (
    <Router>
      <div className='d-flex flex-column min-vh-100'>
        <NavBar />
        <ToastContainer />
          <Routes>
            <Route path="/" element={<AddBooks />} />
            <Route path='/search' element={<BooksSearch/>}/>
          </Routes>
        <Footer />
      </div>
    </Router>
  )
};

export default App;
