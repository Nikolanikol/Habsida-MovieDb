'use client';
import React from 'react';
import { Pagination } from 'antd';
import { IPostComponentProps } from '@/components/PostComponent/PostComponent';
import PostListComponent from '@/components/PostListComponent/PostListComponent';
import { getTags } from '@/http/movies';

interface IMovies {
  page: number;
  total_pages: number;
  total_results: number;
  results: IPostComponentProps[];
}

const PostsPage = () => {
  return (
    <div>
      <PostListComponent />
    </div>
  );
};

export default PostsPage;
// import React, { FC, useState } from 'react';
// import Image from 'next/image';
// import style from './style.module.scss';
// import PostListComponent from '@/components/PostListComponent/PostListComponent';
// import axios from 'axios';
// import { IPostComponentProps } from '@/components/PostComponent/PostComponent';
// import { Pagination } from 'antd';
// interface IMovies {
//   page: number;
//   total_pages: number;
//   total_results: number;
//   results: IPostComponentProps[];
// }
// interface IPostPagesProps {
//   movies: IMovies;
// }

// // export async function getServerSideProps() {
// //   const res = await fetch(`https://api.themoviedb.org/3/discover/movie`, {
// //     headers: {
// //       Authorization:
// //         'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZmZkNmJkODhhNjA1MjVmN2ZjNGQ4ZmFkZmMwNmNiYiIsIm5iZiI6MTczNzg3MTY0My44MTEsInN1YiI6IjY3OTVkMTFiNTc5NzVmMWIwYjE4YjNjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-NMVcln-8qmEjevyK3q4o3AmqMhUrAALmMQtgSeKFko',
// //     },
// //   });
// //   const data = await res.json();
// //   return {
// //     props: { movies: data || [] },
// //   };
// // }

// const PostsPage = async () => {
//   const [state, setState] = useState();
//   useState(() => {
//     fetch(`https://api.themoviedb.org/3/discover/movie`, {
//       headers: {
//         Authorization:
//           'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZmZkNmJkODhhNjA1MjVmN2ZjNGQ4ZmFkZmMwNmNiYiIsIm5iZiI6MTczNzg3MTY0My44MTEsInN1YiI6IjY3OTVkMTFiNTc5NzVmMWIwYjE4YjNjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-NMVcln-8qmEjevyK3q4o3AmqMhUrAALmMQtgSeKFko',
//       },
//     })
//       .then((data) => data.json())
//       .then((res) => setState(res));
//   });
//   let currentPage = 1;
//   let page = currentPage;
//   let limit = 4;
//   let offset = limit * page;

//   //   let data: IMovies = await res.json();
//   //   const updateData = async (pageNum: number) => {
//   //     const res = await fetch(
//   //       `https://api.themoviedb.org/3/discover/movie${pageNum}`,
//   //       {
//   //         headers: {
//   //           Authorization:
//   //             'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZmZkNmJkODhhNjA1MjVmN2ZjNGQ4ZmFkZmMwNmNiYiIsIm5iZiI6MTczNzg3MTY0My44MTEsInN1YiI6IjY3OTVkMTFiNTc5NzVmMWIwYjE4YjNjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-NMVcln-8qmEjevyK3q4o3AmqMhUrAALmMQtgSeKFko',
//   //         },
//   //       }
//   //     );
//   //   };

//   //   if (data.results.length < 0) return <div>Mistake</div>;
//   return (
//     <div>
//       {/* <PostListComponent movies={data.results} /> */}
//       <Pagination
//         align="center"
//         pageSize={limit}
//         defaultCurrent={currentPage}
//         total={90}
//       />
//     </div>
//   );
// };

// export default PostsPage;
