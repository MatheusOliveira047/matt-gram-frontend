import "./Auth.css"

import { Link } from 'react-router-dom'

import { useState,useEffect } from 'react'


const Register = ()=>{
  

  const handleSubmitRegister = (e)=>{
    e.preventDefault()
  }
  
  return(
    <div>
      <h2>Matt Gram</h2>
      <p className='subtitle'> Cadastra-se para ver as fotos de seus</p>
      <form onSubmit={handleSubmitRegister}>
        <input type="text" placeholder='Nome' />
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Senha'/>
        <input type="password" placeholder='Conforme a Senha'/>
        <input type="submit" value="Cadastrar" />
      </form>
      <p>Já possui conta ? <Link to={"/login"}>Clique Aqui</Link></p>
    </div>
  )
}


export default Register