'use client';

import React from 'react';
import { AntSwitch, OtherLoginMethod } from '@/components/common';
import Image from 'next/image';
import Link from 'next/link';
import { Divider, FormControlLabel, FormGroup } from '@mui/material';
import { useUser_LoginMutation } from '@/lib/graphql/graphql';
import { useRouter } from 'next/navigation';
import { showSuccess } from '@/utils/utils';

type Props = {};

export type TDataLogin = {
  email: string;
  password: string;
};

const LoginPage = (props: Props) => {
  const router = useRouter();
  const [userLoginMutation] = useUser_LoginMutation();
  const [isShowPassword, setIsShowPassword] = React.useState<boolean>(false);
  const [isValidAuth, setIsValidAuth] = React.useState<boolean>(true);
  const [dataLogin, setDataLogin] = React.useState<TDataLogin>({ email: '', password: '' });
  const [isRememberMe, setIsRememberMe] = React.useState<boolean>(false);
  const togglePassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  const onChangeInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataLogin({ ...dataLogin, email: e.target.value });
  };
  const onChangeInPutPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataLogin({ ...dataLogin, password: e.target.value });
  };
  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (dataLogin.email === '' || dataLogin.password === '') {
      setIsValidAuth(!isValidAuth);
      return;
    }
    try {
      const res = await userLoginMutation({
        variables: {
          input: {
            email: dataLogin.email,
            password: dataLogin.password
          }
        }
      });
      if (res?.data) {
        showSuccess('Đăng nhập thành công');
        localStorage.setItem('token', res?.data?.user_login?.token || '');
        localStorage.setItem('refreshToken', res?.data?.user_login?.refreshToken || '');
        router.push('/');
      }
    } catch (error) {
      setIsValidAuth(false);
    }
  };
  const dividerStyle = {
    marginBlock: '2rem',
    borderTop: '1px solid #727272',
    width: '80%'
  };
  return (
    <section className='size-full text-text-base-light'>
      <div className='size-full min-h-screen bg-for-login md:p-8 flex justify-center '>
        <div className='w-full max-w-[734px] h-fit bg-bg-base rounded-lg md:p-0 md:pb-8 p-8'>
          <div className='size-full flex flex-col items-center '>
            {/* Logo */}
            <div className='w-full flex justify-center pt-8 pb-6'>
              <div className='size-9 relative'>
                <Image src='/images/spotify-icon.png' alt='SPOTIFY_IMAGE' fill sizes='auto'></Image>
              </div>
            </div>
            {/* Title */}
            <h1 className='font-bold text-3xl text-center mb-8'>Đăng nhập vào Spotify</h1>
            {!isValidAuth && (
              <div className='w-full px-[50px] mb-5'>
                <div className='w-full flex items-center gap-3 bg-[#e91429] py-3 pl-6 pr-4'>
                  <div className='size-6 relative shrink-0'>
                    <Image src='/icons/warn-icon.svg' alt='SPOTIFY_ICON' fill className='filter-white' />
                  </div>
                  <p className='text-[12px] font-semibold text-text-base-light'>Tên người dùng hoặc mật khẩu không chính xác.</p>
                </div>
              </div>
            )}
            <div className='md:w-[324px] w-full'>
              <OtherLoginMethod page='login' />
            </div>
            <Divider sx={dividerStyle} className='md:w-[534px]' />
            {/* Login Form */}
            <div className='md:w-[324px] w-full'>
              <form action='#' onSubmit={login} className='w-full'>
                <div className='w-full pb-4'>
                  <label htmlFor='email' className='block mb-2 text-[12px] font-bold dark:text-text-base-light'>
                    Email hoặc tên người dùng
                  </label>
                  <input className='input-base border-essential-sub w-full' type='email' id='email' value={dataLogin?.email} onChange={onChangeInputEmail} placeholder='Email hoặc tên người dùng' />
                </div>
                <div className='w-full pb-4'>
                  <label htmlFor='email' className='block mb-2 text-[12px] font-bold dark:text-text-base-light'>
                    Mật khẩu
                  </label>
                  <div className='input-base flex p-0 pr-3 input-base has-[:focus]:border-essential-base border-essential-sub'>
                    <input
                      type={isShowPassword ? 'text' : 'password'}
                      id='password'
                      className='input-base border-none'
                      value={dataLogin?.password}
                      onChange={onChangeInPutPassword}
                      placeholder='Mật khẩu'
                    />
                    <button className='group' onClick={togglePassword}>
                      <div className='w-6 h-6 relative'>
                        <Image
                          src={isShowPassword ? '/icons/eye-close-icon.svg' : '/icons/eye-open-icon.svg'}
                          alt='SPOTIFY_ICON'
                          fill
                          sizes='auto'
                          className='icon-sub-to-white group-hover:filter-white'
                        ></Image>
                      </div>
                    </button>
                  </div>
                </div>
                <FormGroup
                  sx={{
                    '& .MuiFormControlLabel-root': {
                      marginLeft: 0
                    },
                    '& .MuiTypography-root': {
                      fontSize: '10px',
                      marginInline: '12px'
                    }
                  }}
                >
                  <FormControlLabel control={<AntSwitch defaultChecked />} label='Hãy nhớ tôi' />
                </FormGroup>
                <button type='submit' className='btn-primary h-12 w-full rounded-full flex justify-center items-center text-sm font-bold my-8 py-2 px-4'>
                  <span>Đăng nhập</span>
                </button>
                <div className='w-full flex justify-center'>
                  <Link className='text-sm text-text-base-light font-semibold underline' href='/forgot-password'>
                    Quên mật khẩu của bạn?
                  </Link>
                </div>
              </form>
            </div>
            <Divider sx={dividerStyle} className='md:w-[534px]' />
            <div className='w-full py-4'>
              <h2 className='w-full py-4 text-center text-sm font-medium'>
                <span className='text-text-sub'>Bạn chưa có tài khoản?</span>
                <Link href='/sign-up' className='text-text-base-light underline ml-2'>
                  Đăng ký Spotify
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <footer className='w-full p-6 text-center text-[11px] font-medium text-text-sub '>
        <p>This site is clone by Nguyen Viet</p>
        <p>
          My Github:{' '}
          <Link className='underline' href='https://github.com/nguyenviet02'>
            https://github.com/nguyenviet02
          </Link>
        </p>
      </footer>
    </section>
  );
};

export default LoginPage;
