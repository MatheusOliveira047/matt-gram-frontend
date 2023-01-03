import "./Auth.css"

import { Link } from 'react-router-dom'

import { useState,useEffect } from 'react'


const Register = ()=>{
  
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')


  const handleSubmitRegister = (e)=>{
    e.preventDefault()

    const user = {
      name,
      email,
      password,
      confirmPassword
    }

    console.log(user)
  }
  
  return(
    <div id='register'>
      <h2>Matt Gram</h2>
      <p className='subtitle'> Cadastra-se para ver as fotos de seus</p>
      <form onSubmit={handleSubmitRegister}>
        <input 
          type="text" 
          placeholder='Nome' 
          onChange={(e)=> setName(e.target.value)}
          value={name || ''}
        />
        <input 
          type="email" 
          placeholder='Email' 
          onChange={(e)=> setEmail(e.target.value)}
          value={email || ''}
        />
        <input 
          type="password"  
          placeholder='Senha'
          onChange={(e)=> setPassword(e.target.value)}
          value={password || ''}  
        />
        <input 
          type="password" 
          placeholder='Conforme a Senha'
          onChange={(e)=> setConfirmPa(e.target.value)}
          value={confirmPassword || ''}
        />
        <input type="submit" value="Cadastrar" />
      </form>
      <p>Já possui conta ? <Link to={"/login"}>Clique Aqui</Link></p>
    </div>
  )
}


export default Register