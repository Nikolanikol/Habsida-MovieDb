'use client';
import React, { FC, use, useState } from 'react';
import style from './RatingRowComponent.module.scss';
import { Rate } from 'antd';
import { rateMovie } from '@/http/movies';

interface IRatingRowComponentProps {
  voteAverage: number;
  id: number;
}
const RatingRowComponent: FC<IRatingRowComponentProps> = ({
  voteAverage,
  id,
}) => {
  const [data, setData] = useState(voteAverage);
  const [loading, setLoading] = useState(false);

  const handleClick = (value: number) => {
    setData(value);
    rateMovie(id, value);
  };

  if (loading) return '';
  return (
    <div className={style.starRow}>
      <Rate count={10} value={data} onChange={handleClick} />
    </div>
  );
};

export default RatingRowComponent;
