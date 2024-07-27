import { useUser_RegisterMutation } from '@/lib/graphql/graphql';
import { dataSignUpState, stepSignUpState } from '@/lib/recoil/atoms';
import { showError, showSuccess } from '@/utils/utils';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useRecoilState } from 'recoil';

type Props = {};

const Policy = (props: Props) => {
  const router = useRouter();
  const [stepSignUp] = useRecoilState(stepSignUpState);
  const [dataSignUp, setDataSignUp] = useRecoilState(dataSignUpState);
  const [isOnThisStep, setIsOnThisStep] = React.useState<boolean>(false);
  const [registerUserMutation] = useUser_RegisterMutation();
  const policies = [
    {
      content: 'Tôi không muốn nhận tin nhắn tiếp thị từ Spotify',
      value: 'notGetMarketingMessage'
    },
    {
      content: 'Chia sẻ dữ liệu đăng ký của tôi với các nhà cung cấp nội dung của Spotify cho mục đích tiếp thị.',
      value: 'shareData'
    }
  ];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDataSignUp({
      ...dataSignUp,
      [event.target.value]: event.target.checked
    });
  };

  const submitForm = async () => {
    try {
      const res = await registerUserMutation({
        variables: {
          input: dataSignUp
        }
      });
      if (res?.data) {
        showSuccess('Đăng ký thành công!');
        router.push('/sign-in');
      }
    } catch (error: any) {
      showError('Đăng ký thất bại. Lý do: ' + error.message);
    }
  };

  React.useEffect(() => {
    setIsOnThisStep(stepSignUp === 3);
    return () => {
      setIsOnThisStep(false);
    };
  }, [stepSignUp]);

  return (
    <section className={`mt-4 w-full group ${isOnThisStep ? 'active' : 'hello'}`}>
      <FormGroup className='w-full flex flex-col gap-2'>
        {policies?.map((policy, index) => {
          const checked = dataSignUp?.[policy?.value as keyof typeof dataSignUp] as boolean;
          return (
            <FormControlLabel
              key={index}
              sx={{
                '& .MuiTypography-root': {
                  fontFamily: 'inherit'
                }
              }}
              className={`flex w-full py-5 pl-5 mx-0 rounded-md bg-bg-tinted-base [&>span]:text-sm [&>span]:font-medium [&>span]:text-text-base-light [&>.MuiTypography-root]:pl-3 pr-4 [&>.MuiButtonBase-root]:p-0 opacity-0 group-[.active]:opacity-100 duration-300 ease-linear ${index === 1 ? 'delay-100' : ''}`}
              control={
                <Checkbox
                  value={policy?.value}
                  checked={checked}
                  onChange={handleChange}
                  sx={{
                    '& .MuiSvgIcon-root': { fontSize: 20 },
                    '&.Mui-checked': {
                      color: '#1ed760'
                    }
                  }}
                />
              }
              label={policy?.content}
            />
          );
        })}
      </FormGroup>
      <div className='w-full mt-2 flex flex-col gap-2 opacity-0 group-[.active]:opacity-100 duration-300 ease-linear delay-200'>
        <p className='text-[12px] text-text-base-light font-semibold'>
          Bằng việc nhấp vào nút Đăng ký, bạn đồng ý với{' '}
          <Link className='text-text-bright-accent underline' href='/'>
            Điều khoản và điều kiện sử dụng
          </Link>{' '}
          của Spotify.
        </p>
        <p className='text-[12px] text-text-base-light font-semibold'>
          Để tìm hiểu thêm về cách thức Spotify thu thập, sử dụng, chia sẻ và bảo vệ dữ liệu cá nhân của bạn, vui lòng xem{' '}
          <Link className='text-text-bright-accent underline' href=''>
            Chính sách quyền riêng tư của Spotify
          </Link>
          .
        </p>
      </div>
      <button onClick={submitForm} className='btn-primary h-12 w-full rounded-full flex justify-center items-center text-sm font-bold mt-8 py-2 px-4'>
        <span>Đăng ký</span>
      </button>
    </section>
  );
};

export default Policy;
