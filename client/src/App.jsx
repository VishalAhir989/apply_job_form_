import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './component/Form/Form'
import { Route, Routes } from 'react-router-dom'
import Success from './component/Success/Success'
import Error from './component/Error/Error'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/Form==SuccessFull--//submit' element={<Success />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App
