

import axios from 'axios'
import {$authHost} from './index'


export const getMovies = async(pageNum)=>{
    const data = await $authHost.get(`/discover/movie?page=${pageNum}`)
    return data
}
export const getRatedMovies = async(pageNum, rateNum)=>{
    const data = await $authHost.get(`/discover/movie?page=${pageNum}&vote_average.gte=${rateNum}`)
    return data
}
export const searchMovies = async(value)=>{
    const data = await $authHost.get(`/search/movie?query=${value}`)
    return data
}
export const getTags = async()=>{
    const apiKey = window.localStorage.getItem('sessionId')
    const data = await $authHost.get(`/genre/movie/list?api_key=${apiKey}`)
    return data
}
export const authenticateUser = async (username, password) => {
    try {
      // Шаг 1: Получение токена
      const { data: tokenData } = await $authHost.get(
        `/authentication/token/new`,
        { params: { api_key: process.env.NEXT_PUBLIC_API_TOKEN } }
      );
  
      const requestToken = tokenData.request_token;
  
      // Шаг 2: Валидация токена с логином и паролем
      await $authHost.post(
        `/authentication/token/validate_with_login`,
        {
          username,
          password,
          request_token: requestToken,
        },
        { params: { api_key: process.env.NEXT_PUBLIC_API_TOKEN } }
      );
  
      // Шаг 3: Создание сессии
      const { data: sessionData } = await $authHost.post(
        `/authentication/session/new`,
        { request_token: requestToken },
        { params: { api_key: process.env.NEXT_PUBLIC_API_TOKEN } }
      );
  
      console.log('Session ID:', sessionData.session_id);
      return sessionData.session_id;
    } catch (error) {
      console.error('Ошибка аутентификации:', error);
    }
  };
 export const rateMovie = async (movieId, rating) => {
    const apiKey = process.env.NEXT_PUBLIC_API_TOKEN; // Ваш API-ключ
    const sessionId = window.localStorage.getItem('sessionId'); // ID активной сессии
  
    try {
      const response = await $authHost.post(
        `/movie/${movieId}/rating`,
        { value: rating }, // Значение рейтинга
        {
          params: { api_key: apiKey, session_id: sessionId },
          headers: { 'Content-Type': 'application/json;charset=utf-8' },
        }
      );
      console.log('Рейтинг успешно обновлён:', response.data);
    } catch (error) {
      console.error('Ошибка при изменении рейтинга:', error);
    }
  };