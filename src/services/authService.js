import { api,requestConfig } from '../utils/config';


//Register user
const register = async(data)=>{
  const config = register("POST",data)
  try {
    const res = await fetch(api + "api/users/register", config)
      .then(res=>res.json())
      .catch(err=>console.log(err))

    if(res){
      localStorage.setItem("user",JSON.stringify(res))
    }
  } catch (error) {
    console.log(error)
  }
  
}

const authService = {
  register
}

export default authService