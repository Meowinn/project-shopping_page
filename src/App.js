import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App2.css';
import Home from './components/home';
import Shop from './components/shop';

const App = () => {
  return (
    <div id="App">
      <BrowserRouter basename='/project-shopping_page'>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
