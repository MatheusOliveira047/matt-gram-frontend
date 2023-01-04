import "./Auth.css"

import { Link } from 'react-router-dom'

import { useState,useEffect } from 'react'

import { useSelector,useDispatch } from 'react-redux'

import { register,reset } from '../../slices/authSlice'

import Message from '../../components/Message'

const Register = ()=>{
  
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')


  const dispatch = useDispatch()

  const {loading,error} = useSelector((state) => state.auth)

  const handleSubmitRegister = (e)=>{
    e.preventDefault()

    const user = {
      name,
      email,
      password,
      confirmPassword
    }

    console.log(user)

    dispatch(register(user))
  }


  // clean all states
  useEffect(()=>{    
    dispatch(reset())
  },[dispatch])
  
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
          onChange={(e)=> setConfirmPassword(e.target.value)}
          value={confirmPassword || ''}
        />
        {!loading && <input type="submit" value="Cadastrar" />}
        {loading &&  <input type="submit" value="Aguarde..." disabled/>}
        {error && <Message msg={error} type="error"/>}

      </form>
      <p>Já possui conta ? <Link to={"/login"}>Clique Aqui</Link></p>
    </div>
  )
}


export default Register