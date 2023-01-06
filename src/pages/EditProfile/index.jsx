import './EditProfile.css'

import { upload } from '../../utils/config'

import { useEffect,useState } from 'react'

import { useSelector,useDispatch } from 'react-redux'


import {profile,resetMessage} from '../../slices/userSlice'


import Message from '../../components/Message'
const EditProfile = () => {
  const dispatch = useDispatch()

  const {user,message,error,loading} = useSelector((state)=> state.user)


  useEffect(()=>{
    dispatch(profile())
  },[dispatch])

  useEffect(()=>{
    if(user){ 
      setName(user.name)
      setEmail(user.email)
      setBio(user.bio)
    }
  },[user])

  console.log(user)

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [bio,setBio] = useState("")
  const [password,setPassword] = useState('')
  const [profileImage,setProfileImage] = useState("")
  const [previewImage,setPreviewImage] = useState("")


  const handleSubmitProfile = e =>{
    e.preventDefault()
  }

  return (
    <div id='edit-profile'>
      <h2>Edite seus dados</h2>
      <p className="subtitle">Adicione uma imagem de perfil e conte mais sobre você ...</p>

      <form onSubmit={handleSubmitProfile}>
        <input 
          type="text" 
          placeholder='Nome' 
          value={name || ''} 
          onChange={(e)=> setName(e.target.value)}  
        />
        <input type="email" placeholder='E-mail' disabled  value={email || ''}/>
        <label>
          <span>Imagem do perfil:</span>
          <input type="file"/>
        </label>
        <label>
          <span>Bio: </span>
          <input 
            type="text" 
            placeholder='Descrição do perfil' 
            value={bio || ''} 
            onChange={(e)=> setBio(e.target.value)} 
          />
        </label>
        <label>
          <span>Quer alterar sua senha ?</span>
          <input type="password" value={password || ''} 
            onChange={(e)=> setPassword(e.target.value)}  placeholder='Digite sua nova senha' />
        </label>
        <input type="submit" value="Atualizar" />
      </form>
    </div>
  )
}

export default EditProfile
