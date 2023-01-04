import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'

import "./App.css"

import { useAuth } from './hooks/useAuth'

//pages
import Home from './pages/Home'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'

//components
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  const {auth,loading} = useAuth()

  if(loading){
    return <p>Carregando ...</p>
  }

  

  return (
  <BrowserRouter>
  <Header/>
    <div className="container">
    <Routes>
      <Route path='/' element={auth ? <Home/> : <Navigate to={"/login"}/>}/>

      <Route path='/login' element={!auth ? <Login/> : <Navigate to={"/"}/>} />
      <Route path='/register' element={!auth ? <Register/> : <Navigate to={"/"}/> } />
    </Routes>
    </div>
    <Footer/>
  </BrowserRouter>
  )
}

export default App
