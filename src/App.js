import React from 'react'
import Home from './pages/homepage/Home'

import About from './pages/about/About'
import Services from './pages/services/Services'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Contacts from './pages/contacts/Contacts'



const App = () => {
  const logIn = true

  return (
   <> 
   
   

   {
   }
    { <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services />} />
        <Route path='/contacts' element={<Contacts/>} />
      </Routes>
    </BrowserRouter> }
   
   </>
  )
}

export default App