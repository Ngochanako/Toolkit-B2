
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './components/admin/Admin'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/admin' element={<Admin/>}></Route>
      </Routes>
    </div>
  )
}
