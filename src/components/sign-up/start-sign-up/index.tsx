import React, { useEffect } from 'react';
import Divider from '@mui/material/Divider';
import Image from 'next/image';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { stepSignUpState, dataSignUpState, TDataSignUp } from '@/lib/recoil/atoms';
import { useUsersLazyQuery } from '@/lib/graphql/graphql';

type Props = {};

const StartSignUp = (props: Props) => {
  const [getUsers, users] = useUsersLazyQuery();
  console.log('☠️ ~ StartSignUp ~ users:', users);

  const [isValidEmail, setIsValidEmail] = React.useState<boolean>(true);
  const [stepSignUp, setStepSignUp] = useRecoilState(stepSignUpState);
  const [dataSignUp, setDataSignUp] = useRecoilState<TDataSignUp>(dataSignUpState);
  const checkValidEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };
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
  const onClickContinue = () => {
    if (!dataSignUp?.email) {
      setIsValidEmail(false);
      return;
    }
    if (isValidEmail) {
      setStepSignUp(stepSignUp + 1);
    }
  };
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataSignUp({
      ...dataSignUp,
      email: e.target.value
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className='w-full h-full'>
      <h1 className='font-bold text-[40px] text-center  dark:text-text-base-light mb-10'>Đăng ký để bắt đầu nghe</h1>
      {/* Form */}
      <form action='#' className='w-full'>
        <div className='w-full'>
          <label htmlFor='email' className='block mb-2 text-sm font-bold dark:text-text-base-light'>
            Địa chỉ email
          </label>
          <input
            className={`${'input-base'} ${isValidEmail ? ' border-essential-sub' : 'border-essential-negative'}`}
            type='email'
            id='email'
            placeholder='name@domain.com'
            value={dataSignUp?.email}
            onChange={onInputChange}
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
      <div className='w-full mt-2'>
        <Link href='/sign-up/phone' className='text-[14px] font-medium text-text-bright-accent underline'>
          Dùng số điện thoại.
        </Link>
      </div>
      <button onClick={onClickContinue} className='btn-primary h-12 w-full rounded-full flex justify-center items-center text-sm font-bold mt-5 py-2 px-4'>
        <span>Tiếp theo</span>
      </button>
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
  );
};

export default StartSignUp;
