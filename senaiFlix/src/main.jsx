import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './global.css'
import App from './App.jsx'
import Details from './details/details.jsx'
import Favorites from './Favorites.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<App/>}/>
        <Route path='/details/:type/:id' element = {<Details/>}/>
        <Route path='/favorites' element = {<Favorites/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
