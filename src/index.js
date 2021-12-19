import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';

import Home from './pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



axios.defaults.baseURL = '' 
axios.defaults.headers.post['Content-Type'] = 'application/json'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>

    <Route path="/" element={<Home />} />
    
    </Routes>
    </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);

