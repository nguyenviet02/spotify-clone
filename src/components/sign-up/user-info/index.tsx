import React, { useEffect } from 'react';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { dataSignUpState, stepSignUpState } from '@/lib/recoil/atoms';
import { colors, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { Gender } from '@/lib/graphql/graphql';

type Props = {};

//* Sửa lại việc lấy dữ liệu ngày thangs năm sinh

export type TDoB = {
  day: string;
  month: string;
  year: string;
};

const UserInfo = (props: Props) => {
  const [stepSignUp, setStepSignUp] = useRecoilState(stepSignUpState);
  const [dataSignUp, setDataSignUp] = useRecoilState(dataSignUpState);
  const dayInputRef = React.useRef<HTMLInputElement>(null);
  const monthInputRef = React.useRef<HTMLSelectElement>(null);
  const yearInputRef = React.useRef<HTMLInputElement>(null);
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
  const checkHasDay = () => {
    const day = dayInputRef.current?.value;
    setCheckDOB({
      ...checkDOB,
      hasDay: Number(day) > 0 && Number(day) < 32
    });
  };
  const checkHasMonth = () => {
    const month = monthInputRef.current?.value || '';
    setCheckDOB({
      ...checkDOB,
      hasMonth: month?.length > 0
    });
  };
  const checkHasYear = () => {
    const year = yearInputRef.current?.value;
    setCheckDOB({
      ...checkDOB,
      hasYear: Number(year) > 1900 && Number(year) < new Date().getFullYear()
    });
  };

  const onInputNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataSignUp({
      ...dataSignUp,
      displayName: e.target.value
    });
  };

  const handleChangeGender = (event: React.ChangeEvent<HTMLInputElement>) => {
    const gender = (event.target as HTMLInputElement).value as Gender;
    setDataSignUp({
      ...dataSignUp,
      gender
    });
  };

  const radioButtonStyle = {
    color: '#b3b3b3',
    '& svg': {
      width: '16px',
      height: '16px'
    },
    '&.Mui-checked [data-testid="RadioButtonUncheckedIcon"]': {
      color: 'transparent',
      backgroundColor: '#1ed760',
      borderRadius: '9999px'
    },
    '&.Mui-checked [data-testid="RadioButtonCheckedIcon"]': {
      color: '#000'
    }
  };
  const radioTextStyle = {
    '& span': {
      fontSize: '14px',
      fontWeight: 600,
      color: '#fff'
    },

    '& .MuiTypography-root': {
      fontFamily: 'inherit'
    }
  };

  const onClickContinue = () => {
    // Kiểm tra tên => ngày sinh => tháng + năm sinh
    if (!dataSignUp?.displayName) {
      setHasName(false);
      return;
    }
    const day = dayInputRef.current?.value;
    const month = monthInputRef.current?.value;
    const year = yearInputRef.current?.value;
    if (!day) {
      setCheckDOB({ ...checkDOB, hasDay: false });
      return;
    }
    if (!month || !year) {
      setCheckDOB({ ...checkDOB, hasMonth: !!month, hasYear: !!year });
      return;
    }
    const dateString = `${year}-${month}-${day}`;
    const date = new Date(dateString);
    setDataSignUp({
      ...dataSignUp,
      dateOfBirth: date
    });
    setStepSignUp(stepSignUp + 1);
  };

  useEffect(() => {
    if (!dataSignUp?.dateOfBirth) {
      return;
    }
    const date = new Date(dataSignUp?.dateOfBirth);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    !!dayInputRef?.current && (dayInputRef.current.value = day.toString());
    !!monthInputRef?.current && (monthInputRef.current.value = month.toString());
    !!yearInputRef?.current && (yearInputRef.current.value = year.toString());
  }, [dataSignUp?.dateOfBirth]);

  useEffect(() => {
    setIsOnThisStep(stepSignUp === 2);
    return () => {
      setIsOnThisStep(false);
    };
  }, [stepSignUp]);

  return (
    <section className={`mt-4 w-full group ${isOnThisStep ? 'active' : ''}`}>
      <div className='w-full flex flex-col opacity-0 group-[.active]:opacity-100 duration-300 ease-linear'>
        <label htmlFor='displayName' className='text-sm text-text-base-light font-bold'>
          Tên
        </label>
        <p className='text-[12px] text-text-sub font-semibold'>Tên này sẽ xuất hiện trên hồ sơ của bạn</p>
        <input
          type='text'
          id='displayName'
          onChange={onInputNameChange}
          value={dataSignUp?.displayName}
          onBlur={(e) => checkHasName(e.target.value)}
          className={`input-base mt-2 ${hasName ? ' border-essential-sub' : 'border-essential-negative'}`}
        />
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
        <label htmlFor='day' className='text-sm text-text-base-light font-bold mb-[2px]'>
          Ngày sinh
        </label>
        <p className='text-[12px] text-text-sub font-semibold'>Tại sao chúng tôi cần biết ngày sinh của bạn? Tìm hiểu thêm.</p>
        <div className='flex gap-2'>
          <input
            type='text'
            id='day'
            placeholder='dd'
            ref={dayInputRef}
            onBlur={checkHasDay}
            className={`input-base mt-2 w-[30%] ${checkDOB?.hasDay ? ' border-essential-sub' : 'border-essential-negative'}`}
          />
          <select ref={monthInputRef} defaultValue='' onBlur={checkHasMonth} className={`input-base mt-2 ${checkDOB?.hasMonth ? ' border-essential-sub' : 'border-essential-negative'}`}>
            <option value='' disabled>
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
            ref={yearInputRef}
            type='text'
            placeholder='yyyy'
            onBlur={checkHasYear}
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
              <p className='text-[12px] font-medium text-text-negative'>Vui lòng nhập ngày sinh họp lệ.</p>
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
        <FormControl>
          <label className='text-sm text-text-base-light font-bold'>Giới tính</label>
          <p className='text-[12px] text-text-sub font-semibold'>Giới tính của bạn giúp chúng tôi cung cấp nội dung đề xuất và quảng cáo phù hợp với bạn.</p>
          <div className='mt-2 flex flex-col'>
            <RadioGroup
              className='py-1'
              aria-labelledby='demo-radio-buttons-group-label'
              defaultValue={dataSignUp?.gender}
              value={dataSignUp?.gender}
              onChange={handleChangeGender}
              name='radio-buttons-group'
            >
              <div className='flex flex-row gap-8'>
                <FormControlLabel value={Gender.Male} sx={radioTextStyle} control={<Radio size='small' sx={radioButtonStyle} />} label='Nam' />
                <FormControlLabel value={Gender.Female} sx={radioTextStyle} control={<Radio size='small' sx={radioButtonStyle} />} label='Nữ' />
              </div>
              <FormControlLabel value={Gender.NoGender} sx={radioTextStyle} control={<Radio size='small' sx={radioButtonStyle} />} label='Không phân biệt giới tính' />
              <FormControlLabel value={Gender.Others} sx={radioTextStyle} control={<Radio size='small' sx={radioButtonStyle} />} label='Giới tính khác' />
              <FormControlLabel value={Gender.Secret} sx={radioTextStyle} control={<Radio size='small' sx={radioButtonStyle} />} label='Không muốn nêu cụ thể' />
            </RadioGroup>
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
        </FormControl>
        <button onClick={onClickContinue} className='btn-primary h-12 w-full rounded-full flex justify-center items-center text-sm font-bold mt-5 py-2 px-4'>
          <span>Tiếp theo</span>
        </button>
      </div>
    </section>
  );
};

export default UserInfo;
