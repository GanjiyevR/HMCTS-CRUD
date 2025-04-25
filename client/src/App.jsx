import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Tasks from './Tasks'
import CreateTask from './CreateTask'
import UpdateTask from './UpdateTask'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <BrowserRouter>
        <Routes paths="/" element={ <Tasks />}></Routes>
        <Routes paths="/create" element={<CreateTask />}></Routes>
        <Routes paths="/update" element={<UpdateTask />}></Routes>
      </BrowserRouter>
     </div>
    </>
  )
}

export default App
