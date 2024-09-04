import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { dataUserState } from '@/lib/recoil/atoms';

type Props = {};

//* TODO: Change background of header match with image

const Header = (props: Props) => {
  const userDataState = useRecoilValue(dataUserState);
  console.log('☠️ ~ Header ~ userDataState:', userDataState);
  const renderBaseOnUserAuth = () => {
    if (!userDataState?._id) {
      return (
        <div className='h-full flex items-center'>
          <button className='btn-secondary bg-transparent text-text-base-light text-[14px] h-12 px-8'>
            <Link href='/sign-up'>Đăng ký</Link>
          </button>
          <button className='btn-secondary text-[14px] h-12 px-8'>
            <Link href='/login'>Đăng nhập</Link>
          </button>
        </div>
      );
    }
    return (
      <div className='flex items-center gap-2'>
        <button className='btn-secondary text-[12px] px-4 py-1'>
          <Link href='/'>Khám phá Premium</Link>
        </button>
        <button className='btn-secondary bg-[#0f0f0f] text-[12px] text-text-base-light px-4 py-1'>
          <Link href='/' className='flex justify-center items-center gap-2'>
            <div className='size-4 relative'>
              <Image src='/icons/download-icon.svg' fill sizes='auto' alt='SPOTIFY_ICON' className='filter-white'></Image>
            </div>
            Cài đặt ứng dụng
          </Link>
        </button>
        <button className='btn-secondary size-8 bg-[#0f0f0f] group'>
          <Link href='/' className='flex justify-center items-center'>
            <div className='size-4 relative'>
              <Image src='/icons/notification-icon.svg' fill sizes='auto' alt='SPOTIFY_ICON' className='filter-link-sub group-hover:filter-white'></Image>
            </div>
          </Link>
        </button>
      </div>
    );
  };
  return (
    <header className='w-full h-header-top-bar bg-bg-header-home flex items-center absolute top-0 left-0 z-header-top-bar'>
      <div className='w-full h-12 px-6 flex justify-between items-center'>
        <div className='h-full flex items-center gap-2'>
          <button className='size-8 rounded-full bg-[#050505] flex justify-center items-center'>
            <div className='relative size-4'>
              <Image src='/icons/arrow-left-icon.svg' alt='SPOTIFY_ICON' fill sizes='auto' className='filter-color-sub'></Image>
            </div>
          </button>
          <button className='size-8 rounded-full bg-[#050505] flex justify-center items-center'>
            <div className='relative size-4'>
              <Image src='/icons/arrow-right-icon.svg' alt='SPOTIFY_ICON' fill sizes='auto' className='filter-color-sub'></Image>
            </div>
          </button>
        </div>
        {renderBaseOnUserAuth()}
      </div>
    </header>
  );
};

export default Header;
