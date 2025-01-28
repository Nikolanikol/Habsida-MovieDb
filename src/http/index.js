
import axios from "axios";

const $authHost = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
})

const authInterceptor = (config ) =>{
    if (config && config.headers) {
        const token = process.env.NEXT_PUBLIC_API_KEY; // Получаем API ключ из переменной окружения
        if (token) {
          config.headers.authorization = `Bearer ${token}`;
        }
      }
      return config;   
}

$authHost.interceptors.request.use(authInterceptor)
export{
    $authHost
}