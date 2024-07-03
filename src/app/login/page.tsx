import React from 'react';
import Image from 'next/image';

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <div className='font-medium  '>
      <Image src='/icons/spotify-icon.svg' alt='Spotify logo' width={200} height={200} />
    </div>
  );
};

export default LoginPage;
