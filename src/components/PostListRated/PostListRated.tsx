import style from './PostListRated.module.scss';
import { getRatedMovies } from '@/http/movies';
import PostComponent, {
  IPostComponentProps,
} from '../PostComponent/PostComponent';
import { Pagination } from 'antd';
import { FC } from 'react';
interface IPostListComponent {
  movies: IPostComponentProps[];
}
export interface IMovies {
  page: number;
  total_pages: number;
  total_results: number;
  results: IPostComponentProps[];
}
interface IPostListRated {
  movies: IMovies;
}
const PostListRated: FC<IPostListRated> = async ({ movies }) => {
  if (!movies) return <div>'loading</div>;
  return (
    <div className={style.postListWrapper}>
      <div className={style.postList}>
        {movies.results.map((item) => (
          <PostComponent
            title={item.title}
            release_date={item.release_date}
            genre_ids={item.genre_ids}
            id={item.id}
            overview={item.overview}
            vote_average={item.vote_average}
            poster_path={item.poster_path}
            key={item.id}
            tags={item.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default PostListRated;
