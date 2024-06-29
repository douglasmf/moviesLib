import React from 'react'
import ReactDOM from 'react-dom/client'
import { Global } from './styles/Global.jsx'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Acao from './pages/categorias/Acao.jsx'
import Comedia from './pages/categorias/Comedia.jsx'
import Documentario from './pages/categorias/Documentario.jsx'
import Romance from './pages/categorias/Romance.jsx'
import Terror from './pages/categorias/Terror.jsx'
import MaisVotados from './pages/categorias/MaisVotados.jsx'
import Movie from './pages/Movie.jsx'
import Search from './pages/Search.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global/>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home/>} />
          <Route path='movie/:id' element={<Movie/>} />
          <Route path='search' element={<Search/>} />
          <Route path='action' element={<Acao/>} />
          <Route path='comedy' element={<Comedia/>} />
          <Route path='romance' element={<Romance/>} />
          <Route path='horror' element={<Terror/>} />
          <Route path='documentary' element={<Documentario/>} />
          <Route path='topRated' element={<MaisVotados/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
