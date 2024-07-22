import React from 'react';
import Image from 'next/image';

type Props = {
  page: 'login' | 'sign-up';
};

const OtherLoginMethod = ({ page }: Props) => {
  const otherLoginMethods = [
    {
      iconPath: '/icons/google-icon.svg',
      text: page === 'login' ? 'Tiếp tục bằng Google' : 'Đăng ký bằng Google'
    },
    {
      iconPath: '/icons/facebook-icon.svg',
      text: page === 'login' ? 'Tiếp tục bằng Facebook' : 'Đăng ký bằng Facebook'
    },
    {
      iconPath: '/icons/apple-icon.svg',
      text: page === 'login' ? 'Tiếp tục bằng Apple' : 'Đăng ký bằng Apple'
    }
  ];
  return (
    <div className='w-full [&>*:nth-child(n+2)]:mt-2 '>
      {otherLoginMethods?.map((method, index) => (
        <button key={index} className='w-full h-12 flex justify-center items-center relative py-[7px] pl-[51px] pr-[31px] border border-essential-sub hover:border-essential-base rounded-full '>
          <div className='w-6 h-6 absolute left-5'>
            <Image src={method.iconPath} alt='SPOTIFY_ICON' fill />
          </div>
          <p className='text-[14px] font-bold text-text-base-light'>{method.text}</p>
        </button>
      ))}
      {page === 'login' && (
        <button className='w-full h-12 flex justify-center items-center relative border border-essential-sub hover:border-essential-base rounded-full '>
          <p className='text-[14px] font-bold text-text-base-light'>Tiếp tục bằng số điện thoại</p>
        </button>
      )}
    </div>
  );
};

export default OtherLoginMethod;
