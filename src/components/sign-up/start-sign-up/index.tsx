import React, { useEffect } from 'react';
import Divider from '@mui/material/Divider';
import Image from 'next/image';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { stepSignUpState, dataSignUpState, TDataSignUp } from '@/lib/recoil/atoms';
import { OtherLoginMethod } from '@/components/common';
import { useUser_CheckExistUserMutation } from '@/lib/graphql/graphql';
import ErrorMessage from '@/components/common/error-message';
import { enqueueSnackbar } from 'notistack';
import LoadingIcon from '@/components/common/loading';
import { showError } from '@/utils/utils';

type Props = {};

const StartSignUp = (props: Props) => {
  const [isValidEmail, setIsValidEmail] = React.useState<boolean>(true);
  const [isUserExist, setIsUserExist] = React.useState<boolean>(false);
  const [isCallApi, setIsCallApi] = React.useState<boolean>(false);
  const [stepSignUp, setStepSignUp] = useRecoilState(stepSignUpState);
  const [dataSignUp, setDataSignUp] = useRecoilState<TDataSignUp>(dataSignUpState);

  const [checkExistUserMutation, checkExistUserEffect] = useUser_CheckExistUserMutation();
  const checkExistUser = async () => {
    try {
      const res = await checkExistUserMutation({
        variables: {
          input: {
            email: dataSignUp?.email
          }
        }
      });
      if (res?.data) {
        setIsUserExist(res?.data?.user_checkExistUser?.email as boolean);
        setIsCallApi(true);
      }
    } catch (error) {
      showError('Đã có lỗi xảy ra, vui lòng thử lại sau');
      setIsValidEmail(false);
      setIsUserExist(true);
    }
  };

  const checkValidEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const onClickContinue = async () => {
    if (!dataSignUp?.email || !isValidEmail || isUserExist || !isCallApi) {
      return;
    }
    setStepSignUp(stepSignUp + 1);
  };

  const onChangeEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isCallApi) {
      setIsCallApi(false);
    }
    setDataSignUp({
      ...dataSignUp,
      email: e.target.value
    });
  };

  const onBlurEmailInput = async () => {
    if (!dataSignUp?.email) {
      setIsValidEmail(false);
      return;
    }
    const validEmail = checkValidEmail(dataSignUp?.email);
    if (!validEmail) {
      setIsValidEmail(false);
      return;
    }
    setIsValidEmail(true);
    await checkExistUser();
  };

  const dividerWithContentStyle = {
    marginBlock: '2rem',
    width: '100%',
    fontWeight: '500',
    color: '#fff',
    fontSize: '12px',

    '&::before': {
      borderTop: '1px solid #727272'
    },

    '&::after': {
      borderTop: '1px solid #727272'
    }
  };

  const dividerStyle = {
    marginBlock: '2rem',
    borderTop: '1px solid #727272',
    width: '100%'
  };

  useEffect(() => {
    setIsCallApi(true);
  }, [stepSignUp]);

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
            onChange={onChangeEmailInput}
            onBlur={onBlurEmailInput}
          />
        </div>
      </form>
      {/* Error message */}
      <ErrorMessage error='Email này không hợp lệ. Hãy đảm bảo rằng email được nhập dưới dạng example@email.com' showError={!isValidEmail} />
      <ErrorMessage error='Email này đã được đăng ký, vui lòng thử email khác!' showError={isUserExist} />
      <div className='w-full mt-2'>
        <Link href='/sign-up/phone' className='text-[14px] font-medium text-text-bright-accent underline'>
          Dùng số điện thoại.
        </Link>
      </div>
      <button
        disabled={!dataSignUp?.email || !isValidEmail || isUserExist || !isCallApi}
        onClick={onClickContinue}
        className='btn-primary h-12 w-full rounded-full flex justify-center items-center gap-2 text-sm font-bold mt-5 py-2 px-4 disabled:cursor-not-allowed'
      >
        <LoadingIcon width={4} height={4} isLoading={checkExistUserEffect?.loading} />
        <span>{checkExistUserEffect?.loading ? 'Đang kiểm tra email...' : 'Tiếp tục'}</span>
      </button>
      <Divider sx={dividerWithContentStyle}>hoặc</Divider>
      {/* Other login method */}
      <div className='mt-8'>
        <OtherLoginMethod page='sign-up' />
      </div>
      <Divider sx={dividerStyle} />
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
