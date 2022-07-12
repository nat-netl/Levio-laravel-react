import axios from 'axios'

export const AuthUser = () => {
 
  const http = axios.create({
    baseURL:'http://levio-c.ru/api',
    headers: {
      'Content-type' : 'application/json',
    }
  });

  return {
    http
  }
  
}