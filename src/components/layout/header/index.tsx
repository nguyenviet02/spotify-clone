import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

//* TODO: Change background of header match with image

const Header = (props: Props) => {
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
        <div className='h-full flex items-center'>
          <button className='btn-secondary bg-transparent text-text-base-light text-[14px] h-12 px-8'>
            <Link href='/sign-up'>Đăng ký</Link>
          </button>
          <button className='btn-secondary text-[14px] h-12 px-8'>
						<Link href='/login'>Đăng nhập</Link>
					</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
