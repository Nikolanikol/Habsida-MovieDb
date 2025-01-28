import React from 'react';
import style from './style.module.scss';
import PostListRated from '@/components/PostListRated/PostListRated';
import { getRatedMovies } from '@/http/movies';
import { IMovies } from '@/components/PostListComponent/PostListComponent';
const page = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZmZkNmJkODhhNjA1MjVmN2ZjNGQ4ZmFkZmMwNmNiYiIsIm5iZiI6MTczNzg3MTY0My44MTEsInN1YiI6IjY3OTVkMTFiNTc5NzVmMWIwYjE4YjNjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-NMVcln-8qmEjevyK3q4o3AmqMhUrAALmMQtgSeKFko',
    },
  };

  const data: IMovies = await fetch(
    'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&vote_average.gte=7',
    options
  ).then((data) => data.json());

  return (
    <div>
      <PostListRated movies={data} />
    </div>
  );
};

export default page;
