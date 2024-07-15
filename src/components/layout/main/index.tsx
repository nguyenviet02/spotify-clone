import React from 'react';
import Split from 'react-split';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  children: React.ReactNode;
};

const Main = ({ children }: Props) => {
  const pathname = usePathname();
  const actionRecommend = [
    {
      title: 'Taọ danh sách phát đầu tiên của bạn',
      description: 'Rất dễ! Chúng tôi sẽ giúp bạn',
      buttonText: 'Tạo danh sách phát'
    },
    {
      title: 'Hãy cùng tìm và theo dõi một số podcast',
      description: 'Chúng tôi sẽ cập nhật cho bạn thông tin về các tập mới',
      buttonText: 'Duyệt xem podcast'
    }
  ];
  const bottomLinkList = [
    {
      text: 'Pháp lý',
      link: '#'
    },
    {
      text: 'Quyền riêng tư',
      link: '#'
    },
    {
      text: 'Quảng cáo',
      link: '#'
    },
    {
      text: 'Về Spotify',
      link: '#'
    },
    {
      text: 'Tuyển dụng',
      link: '#'
    },
    {
      text: 'Doanh nghiệp',
      link: '#'
    },
    {
      text: 'Phát triển',
      link: '#'
    },
    {
      text: 'Dành cho nghệ sĩ',
      link: '#'
    },
    {
      text: 'Nhà phát triển',
      link: '#'
    },
    {
      text: 'Quảng cáo',
      link: '#'
    },
    {
      text: 'Nhà phát hành',
      link: '#'
    },
    {
      text: 'Nhãn hiệu',
      link: '#'
    }
  ];
  return (
    <main className='bg-black h-screen max-h-screen max-w-screen p-2 flex flex-col gap-2'>
      <Split gutterSize={8} minSize={280} maxSize={[420, Infinity]} expandToMin snapOffset={0} className='flex h-full min-h-0 flex-1 w-full'>
        {/* ======Left Side Bar====== */}
        <div className='flex flex-col max-w-[420px] gap-2'>
          {/* ======Header====== */}
          <div className='w-full flex flex-col shrink-0 bg-bg-base rounded-lg'>
            <Link href='/' className='flex items-center mt-5 px-6 gap-1 cursor-pointer'>
              <div className='w-6 h-6 relative'>
                <Image src='/icons/spotify-icon.svg' alt='SPOTIFY_ICON' fill></Image>
              </div>
              <h1 className='text-sm font-bold text-text-base-light'>Spotify</h1>
            </Link>
            <div className='w-full flex flex-col px-3 py-2'>
              <Link href='/' className='flex items-center gap-5 px-3 py-1 h-10 box-content cursor-pointer'>
                <div className='w-6 h-6 relative'>
                  <Image
                    src={pathname === '/' ? '/icons/home-active-icon.svg' : '/icons/home-icon.svg'}
                    alt='SPOTIFY_ICON'
                    fill
                    className={pathname === '/' ? 'filter-white' : 'filter-link-sub'}
                  ></Image>
                </div>
                <h2 className={`text-[14px] font-bold ${pathname === '/' ? 'text-text-base-light' : 'text-text-sub'} group-hover:text-text-base-light transition-all duration-200 ease-linear`}>
                  Trang chủ
                </h2>
              </Link>
              <Link href='/search' className='flex items-center gap-5 px-3 py-1 h-10 box-content group cursor-pointer'>
                <div className={'w-6 h-6 relative'}>
                  <Image
                    src={pathname?.includes('search') ? '/icons/search-active-icon.svg' : '/icons/search-icon.svg'}
                    alt='SPOTIFY_ICON'
                    fill
                    className={`group-hover:filter-white transition-all duration-200 ease-linear ${pathname.includes('search') ? 'filter-white' : 'filter-link-sub'}`}
                  ></Image>
                </div>
                <h2
                  className={`text-[14px] font-bold ${pathname.includes('search') ? 'text-text-base-light' : 'text-text-sub'} group-hover:text-text-base-light transition-all duration-200 ease-linear`}
                >
                  Tìm kiếm
                </h2>
              </Link>
            </div>
          </div>
          {/* ======End Header====== */}

          {/* ======Library Section====== */}
          <div className='w-full bg-bg-base rounded-lg min-h-0 flex-1 flex flex-col justify-between max-h-full'>
            <div className='w-full flex flex-col min-h-0 flex-1'>
              <div className='flex justify-between items-center w-full px-4 py-2 shrink-0'>
                <div className='flex items-center gap-3 px-2 py-1 h-10 group cursor-pointer'>
                  <div className='w-6 h-6 relative '>
                    <Image src='/icons/playlist-icon.svg' alt='SPOTIFY_ICON' fill className='icon-sub-to-white group-hover:filter-white'></Image>
                  </div>
                  <h2 className='text-[14px] text-text-sub font-bold group-hover:text-text-base-light transition-all duration-200 ease-linear'>Thư viện</h2>
                </div>
                <div className='p-2 rounded-full group hover:bg-bg-highlight cursor-pointer'>
                  <div className='w-4 h-4 relative p-2'>
                    <Image src='/icons/plus-icon.svg' alt='SPOTIFY_ICON' fill className='icon-sub-to-white group-hover:filter-white'></Image>
                  </div>
                </div>
              </div>
              <div className='w-full max-h-full p-2 pt-0 min-h-0 overflow-y-auto flex-1 custom-scrollbar'>
                <div className='flex flex-col'>
                  {actionRecommend?.map((action, index) => (
                    <div key={index} className='w-full bg-bg-elevated-base my-2 px-5 py-4 rounded-lg flex flex-col gap-5'>
                      <div className='w-full flex flex-col gap-2 text-text-base-light'>
                        <span className='text-[14px] font-bold'>{action?.title}</span>
                        <span className='text-[12px] font-semibold'>{action?.description}</span>
                      </div>
                      <button className='btn-secondary'>{action?.buttonText}</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='w-full shrink-0'>
              <div className='w-full flex flex-wrap gap-x-4 gap-y-2 my-8 px-6'>
                {bottomLinkList?.map((link, index) => (
                  <Link className='text-[10px] font-medium text-text-sub' href={link?.link} key={index}>
                    {link?.text}
                  </Link>
                ))}
              </div>
              <div className='w-full mb-8 px-6'>
                <button className='w-fit min-h-8 py-[3px] px-3 flex items-center justify-center gap-2 border rounded-full border-text-sub hover:border-text-base-light hover:scale-[1.04] transition-transform'>
                  <div className='w-4 h-4 relative'>
                    <Image src='/icons/global-icon.svg' alt='SPOTIFY_ICON' fill className='filter-white'></Image>
                  </div>
                  <span className='text-[12px] font-bold text-text-base-light'>Tiếng Việt</span>
                </button>
              </div>
            </div>
          </div>
          {/* ======End Library Section====== */}
        </div>
        {/* ======End Left Side Bar====== */}

        {/* ======Main content====== */}
        <div className='bg-bg-base w-full, flex-1'>
          <div className='w-full'>{children}</div>
        </div>
        {/* ======End Main content====== */}
      </Split>
      <div className='bg-bottom-linear min-h-[66px]'>
        <Link href='/sign-up' className='w-full h-full flex justify-between items-center pt-[11px] pr-6 pb-[7px] pl-[15px]'>
          <div>
            <p className='font-bold text-[12px] text-text-base-light'>Xem trước Spotify</p>
            <p className='font-bold text-[14px] text-text-base-light'>Đăng ký để nghe không giới hạn các bài hát và podcast với quảng cáo không thường xuyên. Không cần thẻ tín dụng.</p>
          </div>
          <button className='btn-secondary text-[14px] h-12 px-8 py-2'>Đăng ký miễn phí</button>
        </Link>
      </div>
    </main>
  );
};

export default Main;
