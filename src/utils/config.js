export const api = "https://app-matt-gram.onrender.com/"
export const upload = "https://app-matt-gram.onrender.com/uploads"


export const requestConfig = (method,data,token = null, image = null)=>{
  let config 

  if(image){
    config = {
      method,
      body:data,
      headers:{}
    }
  }else if(method === 'DELETE' || data === null ){

    config = {
      method,
      headers:{},
    }
  }else{
    config = {
      method,
      body:JSON.stringify(data),
      headers:{
        "Content-Type":"application/json"
      }
    }
  }

  if(token){
    config.headers.Authorization = `Bearer ${token}` 
  }

  return config
}