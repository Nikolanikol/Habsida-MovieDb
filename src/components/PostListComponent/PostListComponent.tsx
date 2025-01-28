'use client';
import React, { FC, useEffect, useState } from 'react';
import PostComponent, {
  IPostComponentProps,
} from '../PostComponent/PostComponent';
import style from './PostListComponent.module.scss';
import axios from 'axios';
import { it } from 'node:test';
import { Pagination } from 'antd';
import { $authHost } from '@/http';
import {
  authenticateUser,
  getMovies,
  getTags,
  searchMovies,
} from '../../http/movies';
import { useFetchData } from '../../hooks/index';
import { data } from 'react-router-dom';
import { debounce } from '@/utils/debouns';
import Spinner from '../Spinner/Spinner';
interface IPostListComponent {
  movies: IPostComponentProps[];
}
export interface IMovies {
  page: number;
  total_pages: number;
  total_results: number;
  results: IPostComponentProps[];
}
const PostListComponent: FC = () => {
  const { movies, loading, error, fetchData } = useFetchData<IMovies>();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [tags, setTags] = useState<[]>([]);
  const limit = 4;
  const fetchMovies = async (pageNum: number) => {
    await fetchData(getMovies, pageNum);
  };
  const debounceFetchMovies = debounce(fetchData, 2000);

  const handleInput = async (value: string) => {
    if (value.length > 0) {
      debounceFetchMovies(searchMovies, value);
    }
    if (value.length === 0) {
      fetchMovies(currentPage);
    }
  };

  useEffect(() => {
    if (!window.localStorage.getItem('sessionId')) {
      authenticateUser('NikolaiNikolai', '432654').then((data) =>
        window.localStorage.setItem('sessionId', data)
      );
    }

    getTags().then((res) => setTags(res.data.genres));
    fetchMovies(currentPage);
  }, [currentPage]);

  //   if (!movies || movies?.results.length == 0 || movies == undefined) {
  //     return (
  //       <div
  //         style={{
  //           margin: '100px 50px 50px 0px',
  //           display: 'block',
  //           paddingLeft: 150,
  //         }}
  //       >
  //         Dont founded films
  //       </div>
  //     );
  //   }
  return (
    <div className={style.postListWrapper}>
      <input
        className={style.myInput}
        type="text"
        onChange={(e) => handleInput(e.target.value)}
        placeholder="Type to search..."
      />
      {loading ? (
        <Spinner />
      ) : (
        <div className={style.postList}>
          {!movies?.results.length ? (
            <div>not founded</div>
          ) : (
            movies?.results.map((item) => (
              <PostComponent
                title={item.title}
                release_date={item.release_date}
                genre_ids={item.genre_ids}
                id={item.id}
                overview={item.overview}
                vote_average={item.vote_average}
                poster_path={item.poster_path}
                key={item.id}
                tags={tags}
              />
            ))
          )}
        </div>
      )}
      <Pagination
        align="center"
        pageSize={limit}
        current={currentPage}
        total={movies?.total_results}
        onChange={(page) => setCurrentPage(page)} // Обновляем текущую страницу
      />
    </div>
  );
};

export default PostListComponent;
