import React from 'react';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { stepSignUpState } from '@/lib/recoil/atoms';
type Props = {};

const CreatePassword = (props: Props) => {
  const [stepSignUp, setStepSignUp] = useRecoilState(stepSignUpState);
  const [isValidPassword, setIsValidPassword] = React.useState<boolean>(true);
  const [isShowPassword, setIsShowPassword] = React.useState<boolean>(false);
  const [passwordValidation, setPasswordValidation] = React.useState({
    hasAlpha: false,
    hasNumberOrSpecialCharacter: false,
    hasMinLength: false
  });
  const togglePassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  const onClickContinue = () => {
    setStepSignUp(stepSignUp + 1);
  };

  const checkValidPassword = (password: string) => {
    const regexAlpha = /[a-zA-Z]/;
    const regexNumberOrSpecialCharacter = /[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    const regexMinLength = /.{10,}/;
    const hasAlpha = regexAlpha.test(password);
    const hasNumberOrSpecialCharacter = regexNumberOrSpecialCharacter.test(password);
    const hasMinLength = regexMinLength.test(password);
    setPasswordValidation({
      hasAlpha,
      hasNumberOrSpecialCharacter,
      hasMinLength
    });
    return hasAlpha && hasNumberOrSpecialCharacter && hasMinLength;
  };

  const onBlurPassword = (e: React.FocusEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setIsValidPassword(checkValidPassword(password));
  };

  return (
    <section className='mt-4'>
      <div className='w-full flex flex-col gap-2'>
        <label htmlFor='password' className='text-sm text-text-base-light font-bold'>
          Mật khẩu
        </label>
        <div className={`input-base flex p-0 pr-3 input-base has-[:focus]:border-essential-base ${isValidPassword ? ' border-essential-sub' : 'border-essential-negative'}`}>
          <input type={isShowPassword ? 'text' : 'password'} id='password' onChange={(e) => checkValidPassword(e.target.value)} onBlur={(e) => onBlurPassword(e)} className='input-base border-none' />
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
        <div className='mt-4 flex flex-col gap-2'>
          <p className='text-sm text-text-base-light font-bold'>Mật khẩu của bạn phải có ít nhất</p>
          <div className='flex gap-2 items-center'>
            <div className='w-3 h-3 relative'>
              <Image
                src={passwordValidation?.hasAlpha ? '/icons/tick-check-password-active.svg' : '/icons/tick-check-password.svg'}
                className={passwordValidation?.hasAlpha ? 'filter-positive' : 'filter-sub'}
                alt='SPOTIFY_ICON'
                fill
                sizes='auto'
              ></Image>
            </div>
            <span className={`text-[12px] font-semibold text-text-base-light ${!passwordValidation?.hasAlpha && !isValidPassword ? 'text-text-negative' : 'text-text-base-light'}`}>1 chữ cái</span>
          </div>
          <div className='flex gap-2 items-center'>
            <div className='w-3 h-3 relative'>
              <Image
                src={passwordValidation?.hasNumberOrSpecialCharacter ? '/icons/tick-check-password-active.svg' : '/icons/tick-check-password.svg'}
                className={passwordValidation?.hasNumberOrSpecialCharacter ? 'filter-positive' : 'filter-sub'}
                alt='SPOTIFY_ICON'
                fill
                sizes='auto'
              ></Image>
            </div>
            <span className={`text-[12px] font-semibold text-text-base-light ${!passwordValidation?.hasNumberOrSpecialCharacter && !isValidPassword ? 'text-text-negative' : 'text-text-base-light'}`}>
              1 chữ số hoặc ký tự đặc biệt (ví dụ: # ? ! &)
            </span>
          </div>
          <div className='flex gap-2 items-center'>
            <div className='w-3 h-3 relative'>
              <Image
                src={passwordValidation?.hasMinLength ? '/icons/tick-check-password-active.svg' : '/icons/tick-check-password.svg'}
                className={passwordValidation?.hasMinLength ? 'filter-positive' : 'filter-sub'}
                alt='SPOTIFY_ICON'
                fill
                sizes='auto'
              ></Image>
            </div>
            <span className={`text-[12px] font-semibold text-text-base-light ${!passwordValidation?.hasMinLength && !isValidPassword ? 'text-text-negative' : 'text-text-base-light'}`}>10 ký tự</span>
          </div>
        </div>
        <button onClick={onClickContinue} className='btn-primary h-12 w-full rounded-full flex justify-center items-center text-sm font-bold mt-5 py-2 px-4'>
          <span>Tiếp theo</span>
        </button>
      </div>
    </section>
  );
};

export default CreatePassword;
