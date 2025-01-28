'use client';
import React, { useEffect, useState } from 'react';
import style from './HeaderComponent.module.scss';
import Link from 'next/link';

import { Header } from 'antd/es/layout/layout';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const HeaderComponent = () => {
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState<string[]>();
  const menuItems = [
    {
      key: '1',
      label: <Link href="/posts">Search</Link>,
    },
    {
      key: '2',
      label: <Link href="/rated">Rated</Link>,
    },
  ];
  const handleMenuClick = (e: any) => {
    setActive([e.key]);

    localStorage.setItem('activeMenu', e.key); // сохраняем ключ в localStorage
  };
  useEffect(() => {
    const savedActive = localStorage.getItem('activeMenu');
    if (savedActive) {
      setActive([savedActive]);
    }
    setLoading(false);
  }, []);
  if (loading) return '';
  return (
    <div className={style.header}>
      <Header
        style={{
          zIndex: 1,
          width: '100%',
          height: 90,
          justifyContent: 'center',
          display: 'flex',
          backgroundColor: 'white',
          border: '1px solid black',
          margin: '0 auto',
          maxWidth: 1020,
        }}
      >
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={active}
          items={menuItems}
          onClick={handleMenuClick}
        />
      </Header>
    </div>
  );
};

export default HeaderComponent;
