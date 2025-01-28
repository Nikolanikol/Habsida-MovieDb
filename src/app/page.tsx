import Image from 'next/image';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <header>
        <a href="/posts">posts</a>
      </header>
      <main>body</main>
    </div>
  );
}
