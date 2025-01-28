import PostListComponent from '@/components/PostListComponent/PostListComponent';
import Image from 'next/image';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <main>
        {' '}
        <PostListComponent />
      </main>
    </div>
  );
}
