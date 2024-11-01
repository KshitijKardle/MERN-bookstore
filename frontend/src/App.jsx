import React from "react";
import { Route, Routes } from "react-router-dom";
import Addbook from "./pages/Addbook"
import Deletebook from './pages/Deletebook'
import Home from './pages/Home'
import Showbook from './pages/Showbook'
import EditBooks from "./pages/EditBooks";

const App = () => {
  return (
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/books/create' element={<Addbook/>}></Route>
    <Route path='/books/details/:id' element={<Showbook/>}></Route>
    <Route path='/books/delete/:id' element={<Deletebook/>}></Route>
    <Route path='/books/edit/:id' element={<EditBooks/>}></Route>
  </Routes>
  )
};

export default App;
