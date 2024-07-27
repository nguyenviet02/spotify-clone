import { Divider } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

type Props = {};

const Footer = (props: Props) => {
  const dividerStyle = {
    marginBottom: '2rem',
    borderTop: '1px solid #a7a7a7',
    width: '100%'
  };
  const listItem = [
    {
      title: 'Công ty',
      key: 'company',
      list: [
        {
          title: 'Giới thiệu',
          link: '/'
        },
        {
          title: 'Việc làm',
          link: '/'
        },
        {
          title: 'For the Record',
          link: '/'
        }
      ]
    },
    {
      title: 'Cộng đồng',
      key: 'community',
      list: [
        {
          title: 'Dành cho nghệ sĩ',
          link: '/'
        },
        {
          title: 'Nhà phát triển',
          link: '/'
        },
        {
          title: 'Quảng cáo',
          link: '/'
        },
        {
          title: 'Nhà đầu tư',
          link: '/'
        },
        {
          title: 'Nhà cung cấp',
          link: '/'
        }
      ]
    },
    {
      title: 'Liên kết hữu ích',
      key: 'useful-link',
      list: [
        {
          title: 'Hỗ trợ',
          link: '/'
        },
        {
          title: 'Ứng dụng Di động Miễn phí',
          link: '/'
        }
      ]
    },
    {
      title: 'Các gói của Spotify',
      key: 'spotify-package',
      list: [
        {
          title: 'Premium Individual',
          link: '/'
        },
        {
          title: 'Premium Student',
          link: '/'
        },
        {
          title: 'Spotify Free',
          link: '/'
        }
      ]
    }
  ];
  const listButton = [
    {
      icon: '/icons/instagram-icon.svg',
      link: 'https://www.instagram.com/viet_nguyen_02/'
    },
    {
      icon: '/icons/twitter-icon.svg',
      link: 'https://x.com/NguyenViet214'
    },
    {
      icon: '/icons/facebook-icon-2.svg',
      link: 'https://www.facebook.com/nguyenviet02/'
    }
  ];
  return (
    <footer className='h-fit shrink-0 w-full pt-10'>
      <section className=' pt-2 pb-10 px-8'>
        <div className='pt-8 flex justify-between'>
          <div className='flex flex-1 flex-wrap'>
            {listItem?.map((item) => (
              <div key={item?.key} className='flex flex-col w-[20%] min-w-fit mr-6 mb-8'>
                <h2 className='text-[14px] font-bold text-text-base-light mb-2'>{item?.title}</h2>
                {item?.list?.map((link, index) => (
                  <Link key={index} href='/' className='mb-2 font-semibold w-fit text-text-sub text-[14px] hover:text-text-base-light hover:underline'>
                    {link?.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div className='shrink-0 flex gap-4 mb-8'>
            {listButton?.map((button, index) => (
              <Link key={index} href={button?.link} className=' h-fit relative group'>
                <button className='size-10 rounded-full bg-[#292929] group-hover:bg-[#727272] flex justify-center items-center'>
                  <div className='w-4 h-4 relative'>
                    <Image src={button?.icon} fill sizes='auto' alt='SPOTIFY_ICON' className='filter-white'></Image>
                  </div>
                </button>
              </Link>
            ))}
          </div>
        </div>
        <Divider sx={dividerStyle}></Divider>
        <div className='w-full pt-4 text-center text-[14px] font-medium text-text-sub '>
          <p>This site is clone by Nguyen Viet</p>
          <p>
            My Github:{' '}
            <Link className='underline' href='https://github.com/nguyenviet02'>
              https://github.com/nguyenviet02.
            </Link>
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
