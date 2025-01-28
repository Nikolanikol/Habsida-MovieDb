import React, { FC } from 'react';
import style from './TagsRowComponent.module.scss';
import { Cabin_Sketch } from 'next/font/google';
interface IGenresItem {
  id: number;
  name: string;
}
interface ITagsRowComponent {
  tags: number[];
  data: IGenresItem[];
}
const TagsRowComponent: FC<ITagsRowComponent> = ({ tags, data }) => {
  if (!data) return '';

  return (
    <>
      {tags.map((item, i) => {
        if (i < 3) {
          return data.map((tag) => {
            if (item === tag.id) return <span key={tag.id}>{tag.name}</span>;
          });
        }
      })}
    </>
  );
};

export default TagsRowComponent;
