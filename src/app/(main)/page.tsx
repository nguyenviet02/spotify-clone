'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type Props = {};

const Home = (props: Props) => {
  const router = useRouter();
  return (
    <main className='h-fit z-main-content'>
      <p>lorem2000</p>
    </main>
  );
};

export default Home;
