import { useState } from 'react';


function useFetchData<T>() {
    const [movies, setMovies] = useState<T | null>(null); // Универсальный тип для данных
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
  
    const fetchData = async (
      fetchFunction: (...args: any[]) => Promise<{ data: T }>, // Типизация функции запроса
      ...args: any[]
    ) => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetchFunction(...args);
        setMovies(response.data); // Устанавливаем данные
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };
  
    return { movies, loading, error, fetchData };
  }

export {useFetchData} ;