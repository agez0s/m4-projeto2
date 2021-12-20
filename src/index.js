import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro/Cadastro';
import List from './pages/List/List';
import Profile from './pages/Profile/Profile';
import Movie from './pages/Movie/Movie';

axios.defaults.baseURL = 'https://streaming-api-1.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(
  <React.StrictMode>
<ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
      />
      
    <BrowserRouter>
    <Routes>

    <Route path="/" element={<Home />} />
    <Route path="/cadastro" element={<Cadastro />} />
    <Route path="/list" element={<List />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/movie" element={<Movie />} />
    
    </Routes>
    </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);

