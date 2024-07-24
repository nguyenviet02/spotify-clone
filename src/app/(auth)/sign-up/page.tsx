'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { stepSignUpState } from '@/lib/recoil/atoms';

import { LinearProgress } from '@mui/material';
import SignUpComponents from '@/components/sign-up';

type Props = {};

const SignUpPage = (props: Props) => {
  const [stepSignUp, setStepSignUp] = useRecoilState(stepSignUpState);

  const onClickBackBtn = () => {
    setStepSignUp(stepSignUp - 1);
  };

  const renderComponentForEachStep = useCallback(() => {
    switch (stepSignUp) {
      case 1:
        return <SignUpComponents.CreatePassword />;
      case 2:
        return <SignUpComponents.UserInfo />;
      case 3:
        return <SignUpComponents.Policy />;
      default:
        return <SignUpComponents.StartSignUp />;
    }
  }, [stepSignUp]);

  const renderTitleForEachStep = () => {
    switch (stepSignUp) {
      case 1:
        return 'Tạo mật khẩu';
      case 2:
        return 'Giới thiệu thông tin về bản thân bạn';
      case 3:
        return 'Điều khoản & Điều kiện';
      default:
        return 'Đăng ký để bắt đầu nghe';
    }
  };

  return (
    <main className='w-full h-fit min-h-screen flex flex-col justify-center  items-center bg-bg-base'>
      {/* Header */}
      <header className='w-full mt-8 mb-6 flex justify-center'>
        <div className='w-10 h-10 relative'>
          <Image src='/images/spotify-icon.png' alt='Spotify logo' fill sizes='auto' />
        </div>
      </header>
      {/* Body */}
      <section className='flex flex-col justify-start items-center grow w-full'>
        <div className='w-[324px]'>
          {!!stepSignUp && (
            <div className='ml-[-56px] mr-[-56px]'>
              <LinearProgress
                value={(100 / 3) * stepSignUp}
                color='secondary'
                variant='determinate'
                className='w-full !h-[2px] [&>.MuiLinearProgress-root]: bg-essential-sub [&>.MuiLinearProgress-bar]:bg-essential-bright-accent'
              />
              <div className='flex h-20'>
                <button onClick={onClickBackBtn} className='group p-4'>
                  <div className='h-6 w-6 relative'>
                    <Image src='/icons/arrow-left-icon.svg' alt='SPOTIFY_ICON' fill sizes='auto' className='icon-sub-to-white group-hover:filter-white'></Image>
                  </div>
                </button>
                <div className='flex flex-col py-4 mr-14'>
                  <p className='text-[15px] mb-1 text-text-sub font-semibold'>Bước {stepSignUp} / 3</p>
                  <p className='text-[15px] mb-1 text-text-base-light font-bold'>{renderTitleForEachStep()}</p>
                </div>
              </div>
            </div>
          )}
          {renderComponentForEachStep()}
        </div>
      </section>
      {/* Footer */}
      <footer className='w-full p-6 text-center text-[11px] font-medium text-text-sub '>
        <p>This site is clone by Nguyen Viet</p>
        <p>
          My Github:{' '}
          <Link className='underline' href='https://github.com/nguyenviet02'>
            https://github.com/nguyenviet02
          </Link>
        </p>
      </footer>
    </main>
  );
};

export default SignUpPage;
