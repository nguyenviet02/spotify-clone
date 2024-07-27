'use client';

import React, { useCallback, useEffect, useLayoutEffect } from 'react';
import Split from 'react-split';
import Link from 'next/link';
import LeftSideBar from '../left-side-bar';
import Header from '../header';
import Footer from '../footer';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

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
        <div className='bg-bg-base w-full flex-1 relative'>
          <section className='size-full overflow-hidden flex flex-col rounded-lg'>
            <Header />
            <div className='size-full relative flex-1 min-h-0'>
              <OverlayScrollbarsComponent
                options={{
                  scrollbars: {
                    theme: 'os-theme-spotify'
                    // autoHide: 'scroll'
                  }
                }}
                className='h-full [&>.os-scrollbar-vertical]:!z-scroll-bar'
                defer
              >
                <div className='w-full h-header-top-bar'></div>
                <div className='w-full relative pb-8 flex flex-col justify-between'>
                  <div className='absolute w-full h-bg-content-linear top-0 left-0 z-[-1] mt-[-64px] bg-[#535353] bg-content-linear'></div>
                  <div className='w-full px-content-spacing flex-1'>{children}</div>
                  <Footer />
                </div>
              </OverlayScrollbarsComponent>
            </div>
          </section>
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
