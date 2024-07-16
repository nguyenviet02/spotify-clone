import React, { useEffect } from 'react';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { stepSignUpState } from '@/lib/recoil/atoms';

type Props = {};

const UserInfo = (props: Props) => {
  const [stepSignUp, setStepSignUp] = useRecoilState(stepSignUpState);
  const [hasName, setHasName] = React.useState<boolean>(true);
  const [isOnThisStep, setIsOnThisStep] = React.useState<boolean>(false);
  const [checkDOB, setCheckDOB] = React.useState({
    hasDay: true,
    hasMonth: true,
    hasYear: true
  });
  const checkHasName = (name: string) => {
    setHasName(name.length > 0);
  };
  const checkHasDay = (day: string) => {
    setCheckDOB({
      ...checkDOB,
      hasDay: day.length > 0
    });
  };
  const checkHasMonth = (month: string) => {
    setCheckDOB({
      ...checkDOB,
      hasMonth: month.length > 0
    });
  };
  const checkHasYear = (year: string) => {
    setCheckDOB({
      ...checkDOB,
      hasYear: year.length > 0
    });
  };
  const onClickContinue = () => {
    setStepSignUp(stepSignUp + 1);
  };

  useEffect(() => {
    setIsOnThisStep(stepSignUp === 2);
    return () => {
      setIsOnThisStep(false);
    };
  }, [stepSignUp]);

  return (
    <section className={`mt-4 w-full group ${isOnThisStep ? 'active' : ''}`}>
      <div className='w-full flex flex-col opacity-0 group-[.active]:opacity-100 duration-300 ease-linear'>
        <label htmlFor='name' className='text-sm text-text-base-light font-bold'>
          Tên
        </label>
        <p className='text-[12px] text-text-sub font-semibold'>Tên này sẽ xuất hiện trên hồ sơ của bạn</p>
        <input type='text' id='name' onBlur={(e) => checkHasName(e.target.value)} className={`input-base mt-2 ${hasName ? ' border-essential-sub' : 'border-essential-negative'}`} />
        {/* Error message */}
        {!hasName && (
          <div className='w-full flex gap-1 mt-2'>
            <div className='w-4 h-4 relative shrink-0'>
              <Image src='/icons/warn-icon.svg' alt='SPOTIFY_ICON' fill className='filter-text-negative' />
            </div>
            <p className='text-[12px] font-medium text-text-negative'>Nhập tên cho hồ sơ của bạn.</p>
          </div>
        )}
      </div>
      <div className='w-full flex flex-col mt-4 opacity-0 group-[.active]:opacity-100 duration-500 ease-linear delay-100'>
        <label htmlFor='name' className='text-sm text-text-base-light font-bold mb-[2px]'>
          Ngày sinh
        </label>
        <p className='text-[12px] text-text-sub font-semibold'>Tại sao chúng tôi cần biết ngày sinh của bạn? Tìm hiểu thêm.</p>
        <div className='flex gap-2'>
          <input
            type='text'
            id='date'
            placeholder='dd'
            onBlur={(e) => checkHasDay(e.target.value)}
            className={`input-base mt-2 w-[30%] ${checkDOB?.hasDay ? ' border-essential-sub' : 'border-essential-negative'}`}
          />
          <select id='date' onBlur={(e) => checkHasMonth(e.target.value)} className={`input-base mt-2 ${checkDOB?.hasMonth ? ' border-essential-sub' : 'border-essential-negative'}`}>
            <option value='' selected disabled>
              Tháng
            </option>
            <option value='1'>Tháng 1</option>
            <option value='2'>Tháng 2</option>
            <option value='3'>Tháng 3</option>
            <option value='4'>Tháng 4</option>
            <option value='5'>Tháng 5</option>
            <option value='6'>Tháng 6</option>
            <option value='7'>Tháng 7</option>
            <option value='8'>Tháng 8</option>
            <option value='9'>Tháng 9</option>
            <option value='10'>Tháng 10</option>
            <option value='11'>Tháng 11</option>
            <option value='12'>Tháng 12</option>
          </select>
          <input
            type='text'
            id='date'
            placeholder='yyyy'
            onBlur={(e) => checkHasYear(e.target.value)}
            className={`input-base mt-2 w-[50%] ${checkDOB?.hasYear ? ' border-essential-sub' : 'border-essential-negative'}`}
          />
        </div>
        {/* Error message */}
        <div>
          {!checkDOB?.hasDay && (
            <div className='w-full flex gap-1 mt-2'>
              <div className='w-4 h-4 relative shrink-0'>
                <Image src='/icons/warn-icon.svg' alt='SPOTIFY_ICON' fill className='filter-text-negative' />
              </div>
              <p className='text-[12px] font-medium text-text-negative'>Vui lòng nhập ngày sinh của bạn.</p>
            </div>
          )}
          {!checkDOB?.hasMonth && checkDOB?.hasDay && (
            <div className='w-full flex gap-1 mt-2'>
              <div className='w-4 h-4 relative shrink-0'>
                <Image src='/icons/warn-icon.svg' alt='SPOTIFY_ICON' fill className='filter-text-negative' />
              </div>
              <p className='text-[12px] font-medium text-text-negative'>Chọn tháng sinh của bạn.</p>
            </div>
          )}
          {!checkDOB?.hasYear && checkDOB?.hasDay && (
            <div className='w-full flex gap-1 mt-2'>
              <div className='w-4 h-4 relative shrink-0'>
                <Image src='/icons/warn-icon.svg' alt='SPOTIFY_ICON' fill className='filter-text-negative' />
              </div>
              <p className='text-[12px] font-medium text-text-negative'>Vui lòng nhập năm sinh của bạn bằng 4 chữ số (ví dụ: 1990).</p>
            </div>
          )}
        </div>
      </div>
      <div className='w-full flex flex-col mt-4 opacity-0 group-[.active]:opacity-100 duration-500 ease-linear delay-200'>
        <label htmlFor='name' className='text-sm text-text-base-light font-bold'>
          Giới tính
        </label>
        <p className='text-[12px] text-text-sub font-semibold'>Giới tính của bạn giúp chúng tôi cung cấp nội dung đề xuất và quảng cáo phù hợp với bạn.</p>
        <div className='mt-2'>
          <div className='flex py-1'>
            <label htmlFor='gender-male' className=' relative flex items-center px-6 text-[12px] text-text-base-light font-semibold'>
              Nam
              <input type='radio' name='gender' id='gender-male' value='male' className='absolute opacity-0 peer' />
              <span className='check-mark peer-checked:bg-bg-bright-accent peer-checked:after:block'></span>
            </label>
            <label htmlFor='gender-female' className='relative flex items-center px-6 py-1 text-[12px] text-text-base-light font-semibold'>
              Nữ
              <input type='radio' name='gender' id='gender-female' value='female' className='absolute opacity-0 peer' />
              <span className='check-mark peer-checked:bg-bg-bright-accent peer-checked:after:block'></span>
            </label>
          </div>
          <label htmlFor='gender-no' className='relative flex items-center px-6 py-1 text-[12px] text-text-base-light font-semibold'>
            Không phân biệt giới tính
            <input type='radio' name='gender' id='gender-no' value='no' className='absolute opacity-0 peer' />
            <span className='check-mark peer-checked:bg-bg-bright-accent peer-checked:after:block'></span>
          </label>
          <label htmlFor='gender-other' className='relative flex items-center px-6 py-1 text-[12px] text-text-base-light font-semibold'>
            Giới tính khác
            <input type='radio' name='gender' id='gender-other' value='other' className='absolute opacity-0 peer' />
            <span className='check-mark peer-checked:bg-bg-bright-accent peer-checked:after:block'></span>
          </label>
          <label htmlFor='gender-secret' className='relative flex items-center px-6 py-1 text-[12px] text-text-base-light font-semibold'>
            Không muốn nêu cụ thể
            <input type='radio' name='gender' id='gender-secret' value='secret' className='absolute opacity-0 peer' />
            <span className='check-mark peer-checked:bg-bg-bright-accent peer-checked:after:block'></span>
          </label>
        </div>
        {/* Error message */}
        {!hasName && (
          <div className='w-full flex gap-1 mt-2'>
            <div className='w-4 h-4 relative shrink-0'>
              <Image src='/icons/warn-icon.svg' alt='SPOTIFY_ICON' fill className='filter-text-negative' />
            </div>
            <p className='text-[12px] font-medium text-text-negative'>Chọn giới tính của bạn.</p>
          </div>
        )}
        <button onClick={onClickContinue} className='btn-primary h-12 w-full rounded-full flex justify-center items-center text-sm font-bold mt-5 py-2 px-4'>
          <span>Tiếp theo</span>
        </button>
      </div>
    </section>
  );
};

export default UserInfo;
