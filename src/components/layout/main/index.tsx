'use client';

import React from 'react';
import Split from 'react-split';
import Link from 'next/link';
import LeftSideBar from '../left-side-bar';

type Props = {
  children: React.ReactNode;
};

const Main = ({ children }: Props) => {
  return (
    <main className='bg-black h-screen max-h-screen max-w-screen p-2 flex flex-col gap-2'>
      <Split gutterSize={8} minSize={280} maxSize={[420, Infinity]} expandToMin snapOffset={0} className='flex h-full min-h-0 flex-1 w-full'>
        {/* ======Left Side Bar====== */}
        <LeftSideBar />
        {/* ======End Left Side Bar====== */}

        {/* ======Main content====== */}
        <div className='bg-bg-base w-full, flex-1'>
          <div className='w-full'>{children}</div>
        </div>
        {/* ======End Main content====== */}
      </Split>
      <div className='bg-bottom-linear min-h-[66px]'>
        <Link href='/sign-up' className='w-full h-full flex justify-between items-center pt-[11px] pr-6 pb-[7px] pl-[15px]'>
          <div>
            <p className='font-bold text-[12px] text-text-base-light'>Xem trước Spotify</p>
            <p className='font-bold text-[14px] text-text-base-light'>Đăng ký để nghe không giới hạn các bài hát và podcast với quảng cáo không thường xuyên. Không cần thẻ tín dụng.</p>
          </div>
          <button className='btn-secondary text-[14px] h-12 px-8 py-2'>Đăng ký miễn phí</button>
        </Link>
      </div>
    </main>
  );
};

export default Main;
