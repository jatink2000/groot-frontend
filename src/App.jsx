import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Home from './Components/Home'
import Password from './Pages/password/Password'
import Addproduct from './admin/components/Addproduct'

function App() {

  return (
    <>
     
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/Forgotpassword' element={<Password/>}/>
        <Route path='/addproduct' element={<Addproduct/>}/>


      </Routes>
     </BrowserRouter>
    </>
  )
}
export default App
