import './Header.css'

import { NavLink,Link } from 'react-router-dom'
import {BsSearch,BsHouseDoorFill,BsFillPersonFill, BsFillCameraFill} from 'react-icons/bs'


const Header = ()=>{
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
          <li><NavLink to="/"><BsHouseDoorFill/></NavLink></li> 
          <li><NavLink to="/login">Entrar</NavLink></li> 
          <li><NavLink to="/register">Cadastrar</NavLink></li> 
        </ul>
      </nav>
    </header>
  )
}

export default Header