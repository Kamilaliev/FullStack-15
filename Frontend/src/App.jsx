import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import MainRoot from './Components/MainRoot/MainRoot';
import MainPage from './Pages/MainPage/MainPage';
import Admin from './Pages/AdminPage/Admin';
import Basket from './Pages/BasketPage/Basket';
import Detail from './Pages/DetailPage/Detail';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<MainRoot />}>
          <Route index element={<MainPage />} />
          <Route path='admin' element={<Admin/>}/>
          <Route path='basket' element={<Basket/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
        </Route>

      </Routes>
    </>
  )
}

export default App
