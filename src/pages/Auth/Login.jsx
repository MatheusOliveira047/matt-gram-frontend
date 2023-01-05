import "./Auth.css"

import { Link } from 'react-router-dom'
import Message from '../../components/Message'

import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {login, reset} from '../../slices/authSlice'

const Login = ()=>{
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState("")

  const dispatch = useDispatch()

  const {loading, error} = useSelector(state=>state.auth)


  const handleSubmitLogin = (e)=>{
    e.preventDefault()
    const user = {
      email,
      password
    }

    dispatch(login(user))

  }

  useEffect(()=>{
    dispatch(reset())
  },[dispatch])

  return(
    <div id='login'>
      <h2>Matt Gram</h2>
      <p className="subtitle">Faça o login para ver o que há de novo</p>
      <form onSubmit={handleSubmitLogin}>
        <input 
          type="email" 
          name='email' 
          placeholder='E-mail' 
          onChange={(e)=>setEmail(e.target.value)}
          value={email || ""}
        />
        <input 
          type="password" 
          name="password" 
          placeholder='Senha' 
          onChange={(e)=>setPassword(e.target.value)}
          value={password || ""}
        />
        {!loading && <input type="submit" value="Login" />}
        {loading &&  <input type="submit" value="Aguarde..." disabled/>}
        {error && <Message msg={error} type="error"/>}
        <p>Ainda não possui conta ? <Link to={"/register"}>Clique Aqui</Link></p>

      </form>
    </div>
  )
}


export default Login