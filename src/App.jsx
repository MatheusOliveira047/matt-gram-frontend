import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'

import "./App.css"


//pages
import Home from './pages/Home'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'

//components
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
  <BrowserRouter>
  <Header/>
    <div className="container">
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register/> } />
    </Routes>
    </div>
    <Footer/>
  </BrowserRouter>
  )
}

export default App
