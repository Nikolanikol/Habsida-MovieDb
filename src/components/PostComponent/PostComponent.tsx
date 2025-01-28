import React, { FC } from 'react';
import style from './PostComponent.module.scss';
import Image from 'next/image';
import post from './Rectangle.png';
import { Rate } from 'antd';
import RatingRowComponent from '../RatingRow/RatingRowComponent';
import TagsRowComponent from '../TagsRowComponent/TagsRowComponent';
import { getTags } from '@/http/movies';
import VoteAverageComponent from '../VoteAverage/VoteAverageComponent';
interface IGenresItem {
  id: number;
  name: string;
}
export interface IPostComponentProps {
  title: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  overview: string;
  vote_average: number;
  poster_path: string;
  tags: IGenresItem[];
}
const PostComponent: FC<IPostComponentProps> = ({
  title,
  release_date,
  genre_ids,
  id,
  overview,
  vote_average,
  poster_path,
  tags,
}) => {
  const baseUrl = 'https://image.tmdb.org/t/p/w500';

  return (
    <div>
      <div className={style.card}>
        <div className={style.cardRow}>
          <Image
            src={`${baseUrl}${poster_path}`}
            alt="post"
            width={180}
            height={280}
          ></Image>
          <div className={style.textRow}>
            <div>
              <div className={style.title}>{title}</div>{' '}
              <div className={style.average}>
                <VoteAverageComponent voteAverage={vote_average} />
                {/* <span>{vote_average}</span> */}
              </div>
            </div>
            <div className={style.date}>{release_date} </div>
            <div className={style.tagRow}>
              <TagsRowComponent tags={genre_ids} data={tags} />
            </div>
            <div className={style.desc}>
              <p>{overview}</p>
            </div>
            <RatingRowComponent voteAverage={vote_average} id={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostComponent;
