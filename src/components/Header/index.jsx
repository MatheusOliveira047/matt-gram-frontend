import './Header.css'

import { NavLink,Link } from 'react-router-dom'
import {BsSearch,BsHouseDoorFill,BsFillPersonFill, BsFillCameraFill} from 'react-icons/bs'


import { useAuth } from '../../hooks/useAuth'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { logout,reset } from '../../slices/authSlice'

const Header = ()=>{
  const {auth} = useAuth()
  const {user} = useSelector((state)=>state.auth)

  const navigate = useNavigate()
  const dispacth = useDispatch()

  const handleLogout = ()=>{
    dispacth(logout())
    dispacth(reset())

      navigate('/login')
  }

  return(
    <header className='header'>
      <div>
        <Link to={"/"}>Matt Gram</Link>
      </div>
      <form>
        <BsSearch/>
        <input type="text" placeholder='pesquisar' />
      </form>
      <nav>
        <ul className="navlinks">
          {auth 
          ? (
            <>
              <li><NavLink to="/"><BsHouseDoorFill/></NavLink></li>
              {user && (
                <li>
                  <NavLink to={`/users/${user._id}`}>
                    <BsFillCameraFill/>
                  </NavLink>
                </li>
              )}
              <li>
                <NavLink to={`/profile`}>
                  <BsFillPersonFill/>
                </NavLink>
              </li>
              <li>
                <span onClick={handleLogout}>Sair</span>
              </li>
            </>
          )
          : (
            <>
              <li><NavLink to="/login">Entrar</NavLink></li>
              <li><NavLink to="/register">Cadastrar</NavLink></li>        
            </>
          )
          }

        </ul>
      </nav>
    </header>
  )
}

export default Header