import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Homepg from './Homepg'
import Content from './Table'
import Middle from './Middle'

const Routing = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Homepg/>}/>
        <Route path='/link' element={<Middle />}/>
    </Routes>
    </>
  )
}

export default Routing