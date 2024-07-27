'use client';

import React, { useCallback, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Card, { TCard } from '@/components/common/card';
import ListCard from '@/components/common/list-card';
import { useRecoilState } from 'recoil';
import { numberOfColumnInGridState } from '@/lib/recoil/atoms';

type Props = {};

const Home = (props: Props) => {
  const router = useRouter();
  const mainSectionRef = React.useRef<HTMLDivElement>(null);
  const [numberOfColumnInGrid, setNumberOfColumnInGrid] = useRecoilState(numberOfColumnInGridState);
  const handleMainSectionWidth = useCallback(() => {
    if (!mainSectionRef.current) return;
    const mainSectionWidth = mainSectionRef.current.clientWidth;
    const r = document.querySelector(':root');
    if (r) {
      const rs = getComputedStyle(r);
      const minColumnWidth = parseInt(rs.getPropertyValue('--min-column-width'));
      const column = Math.floor(mainSectionWidth / minColumnWidth);
      setNumberOfColumnInGrid({ column: column > 1 ? column : 1 });
    }
  }, [mainSectionRef, setNumberOfColumnInGrid]);
  useEffect(() => {
    handleMainSectionWidth();
  }, [handleMainSectionWidth]);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.addEventListener('resize', handleMainSectionWidth);
    return () => {
      window.removeEventListener('resize', handleMainSectionWidth);
    };
  }, [mainSectionRef, handleMainSectionWidth]);
  const listData: TCard[] = [
    {
      type: 'circle',
      thumbnail: '/images/mockup/test.jpeg',
      title: 'Sơn Tùng MTP',
      description: 'Nghệ sĩ'
    },
    {
      type: 'circle',
      thumbnail: '/images/mockup/test2.jpeg',
      title: 'HIEUTHUHAI',
      description: 'Nghệ sĩ'
    },
    {
      type: 'circle',
      thumbnail: '/images/mockup/test3.jpeg',
      title: 'GREY D',
      description: 'Nghệ sĩ'
    },
    {
      type: 'circle',
      thumbnail: '/images/mockup/test4.jpeg',
      title: 'Wren Evans',
      description: 'Nghệ sĩ'
    },
    {
      type: 'circle',
      thumbnail: '/images/mockup/test5.jpeg',
      title: 'Lou Hoàng',
      description: 'Nghệ sĩ'
    },
    {
      type: 'circle',
      thumbnail: '/images/mockup/test6.jpeg',
      title: 'DaLAB',
      description: 'Nghệ sĩ'
    }
  ];
  const listData2: TCard[] = [
    {
      type: 'square',
      thumbnail: '/images/mockup/test7.jpeg',
      title: 'MUSE',
      description: 'Jimin'
    },
    {
      type: 'square',
      thumbnail: '/images/mockup/test8.jpeg',
      title: 'GOLDEN',
      description: 'Jung Kook'
    },
    {
      type: 'square',
      thumbnail: '/images/mockup/test7.jpeg',
      title: 'Smeraaldo Garden Marching In Summer',
      description: 'Jimin, Loco'
    },
    {
      type: 'square',
      thumbnail: '/images/mockup/test9.jpeg',
      title: 'Ai Cũng Phải Bắt Đầu Từ Đâu Đó',
      description: 'HIEUTHUHAI'
    },
    {
      type: 'square',
      thumbnail: '/images/mockup/test10.jpeg',
      title: 'Đừng Làm Trái Tim Anh Đau',
      description: 'Sơn Tùng MTP'
    },
    {
      type: 'square',
      thumbnail: '/images/mockup/test11.jpeg',
      title: 'm-tp M-TP',
      description: 'Sơn Tùng MTP'
    }
  ];
  return (
    <main ref={mainSectionRef} className='h-fit pt-2 z-main-content flex flex-col gap-6'>
      <ListCard title='Nghệ sĩ phổ biến' link='/' listData={listData} />
      <ListCard title='Album phổ biến' link='/' listData={listData2} />
    </main>
  );
};

export default Home;
