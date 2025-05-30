import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import Signup from './Components/Signup'

function App() {

  return (
    <>
     
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>

      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
