import Link from 'next/link';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='w-full h-fit min-h-screen bg-bg-base flex flex-col justify-between'>
      {children}
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
}
