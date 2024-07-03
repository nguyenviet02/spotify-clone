'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Divider from '@mui/material/Divider';

type Props = {};

const SignUpPage = (props: Props) => {
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);

  const otherLoginMethods = [
    {
      iconPath: '/icons/google-icon.svg',
      text: 'Đăng ký bằng Google'
    },
    {
      iconPath: '/icons/facebook-icon.svg',
      text: 'Đăng ký bằng Facebook'
    },
    {
      iconPath: '/icons/apple-icon.svg',
      text: 'Đăng ký bằng Apple'
    }
  ];

  const checkValidEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  return (
    <section className='w-screen h-screen flex justify-center  items-start bg-bg-base'>
      <div className='flex items-center flex-col w-full h-full'>
        {/* Header */}
        <div className='w-10 h-10 relative mt-8 mb-6'>
          <Image src='/images/spotify-icon.png' alt='Spotify logo' fill />
        </div>
        {/* Body */}
        <div className='flex flex-col justify-center items-start grow max-w-[324px]'>
          <h1 className='font-bold text-[40px] text-center  dark:text-text-base-light mb-10'>Đăng ký để bắt đầu nghe</h1>
          {/* Form */}
          <form action='#' className='w-full'>
            <div className='w-full'>
              <label htmlFor='email' className='block mb-2 text-sm font-bold dark:text-text-base-light'>
                Địa chỉ email
              </label>
              <input
                className={
                  'text-[1rem] block text-text-base-light font-medium py-3 px-4 w-full rounded bg-bg-base outline-none border-[1px] focus:border-essential-base ' +
                  (isValidEmail ? 'border-essential-sub' : 'border-essential-negative')
                }
                type='email'
                id='email'
                placeholder='name@domain.com'
                onBlur={(e) => setIsValidEmail(checkValidEmail(e.target.value))}
              />
            </div>
          </form>
          {/* Error message */}
          {!isValidEmail && (
            <div className='w-full flex gap-1 mt-2'>
              <div className='w-4 h-4 relative shrink-0'>
                <Image src='/icons/warn-icon.svg' alt='SPOTIFY_ICON' fill className='filter-text-negative' />
              </div>
              <p className='text-[12px] font-medium text-text-negative'>Email này không hợp lệ. Hãy đảm bảo rằng email được nhập dưới dạng example@email.com</p>
            </div>
          )}
          <Link href='/sign-up/phone' className='text-[14px] font-medium text-text-bright-accent underline mt-2'>
            Dùng số điện thoại.
          </Link>
          <button className='btn-primary h-12 w-full rounded-full flex justify-center items-center text-sm font-bold mt-5 py-2 px-4'>Tiếp theo</button>
          <Divider className='w-full before:border-t-essential-sub after:border-t-essential-sub text-text-base-light text-[12px] font-medium mt-8'>hoặc</Divider>
          {/* Other login method */}
          <div className='w-full mt-8 [&>*:nth-child(n+2)]:mt-2 '>
            {otherLoginMethods?.map((method, index) => (
              <button key={index} className='w-full h-12 flex justify-center items-center relative py-[7px] pl-[51px] pr-[31px] border border-essential-sub hover:border-essential-base rounded-full '>
                <div className='w-6 h-6 absolute left-5'>
                  <Image src={method.iconPath} alt='SPOTIFY_ICON' fill />
                </div>
                <p className='text-[14px] font-bold text-text-base-light'>{method.text}</p>
              </button>
            ))}
          </div>
          <Divider className='w-full mt-8 border-t-[1px] border-t-essential-sub' />
          <div className='mt-8 text-center w-full'>
            <span className='text-[14px] font-medium text-text-sub'>Bạn đã có tài khoản?</span>
            <Link className='text-[14px] font-medium text-text-base-light underline ml-1' href='/login'>
              Đăng nhập tại đây.
            </Link>
          </div>
        </div>
        {/* Footer */}
        <div className='w-full p-6 text-center text-[11px] font-medium text-text-sub '>
          <p>This site is protected by reCAPTCHA and the Google</p>
          <p>Privacy Policy and Terms of Service apply.</p>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
