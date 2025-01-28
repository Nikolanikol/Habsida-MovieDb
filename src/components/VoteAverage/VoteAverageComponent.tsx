import React, { FC } from 'react';
import style from './VoteAverageComponent.module.scss';
import clsx from 'clsx';

interface IVoteAverageComponent {
  voteAverage: number;
}
const VoteAverageComponent: FC<IVoteAverageComponent> = ({ voteAverage }) => {
  let clazzes = '';
  if (voteAverage <= 3) clazzes = style.red;
  if (voteAverage > 3 && voteAverage <= 5) clazzes = style.orange;
  if (voteAverage > 5 && voteAverage <= 7) clazzes = style.yellow;
  if (voteAverage > 7) clazzes = style.green;
  return (
    <div className={style.voteWrapper}>
      <span className={clsx(style.voteItem, clazzes)}>
        {voteAverage.toFixed(1)}
      </span>
    </div>
  );
};

export default VoteAverageComponent;
