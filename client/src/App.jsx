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
      <Routes>
        <Route path="/" element={<Tasks />}></Route>
        <Route path="/create" element={<CreateTask />}></Route>
        <Route path="/update/:id" element={<UpdateTask />}></Route>
      </Routes>
      </BrowserRouter>
     </div>
    </>
  )
}

export default App
