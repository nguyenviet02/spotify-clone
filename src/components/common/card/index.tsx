import React from 'react';
import Image from 'next/image';

export type TCard = {
  type: 'circle' | 'square';
  thumbnail: string;
  title: string;
  description: string;
  isActive?: boolean;
};

const Card = ({ type, thumbnail, title, description, isActive }: TCard) => {
  return (
    <div className={`size-full flex flex-col gap-2 p-3 card-item ${!isActive && 'hidden'}`}>
      <div className={`w-full aspect-square relative shrink-0 overflow-hidden ${type === 'circle' ? 'rounded-full' : ' rounded-[4px]'}`}>
        <Image src={thumbnail} fill sizes='auto' alt='SPOTIFY_IMAGE' className='object-cover'></Image>
      </div>
      <div className='w-full flex-1 flex flex-col gap-1'>
        <h3 className='font-bold text-[14px] text-text-base-light line-clamp-1'>{title}</h3>
        <p className='text-[14px] text-text-sub line-clamp-2'>{description}</p>
      </div>
    </div>
  );
};

export default Card;
