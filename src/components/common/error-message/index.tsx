import React from 'react';
import Image from 'next/image';

type Props = {
  error: string;
  showError: boolean;
};

const ErrorMessage = ({ error, showError }: Props) => {
  if (!showError) return null;
  return (
    <div className='w-full flex gap-1 mt-2'>
      <div className='w-4 h-4 relative shrink-0'>
        <Image src='/icons/warn-icon.svg' alt='SPOTIFY_ICON' fill className='filter-text-negative' />
      </div>
      <p className='text-[12px] font-medium text-text-negative'>{error}</p>
    </div>
  );
};

export default ErrorMessage;
