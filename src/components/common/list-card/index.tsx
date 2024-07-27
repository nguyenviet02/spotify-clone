import React from 'react';
import Card, { TCard } from '../card';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { numberOfColumnInGridState } from '@/lib/recoil/atoms';

export type TListCard = {
  title: string;
  link: string;
  listData: TCard[];
};

const ListCard = ({ title, link, listData }: TListCard) => {
  const [numberOfColumnInGrid] = useRecoilState(numberOfColumnInGridState);
  return (
    <section className='w-full pt-2'>
      <div className='w-full flex justify-between items-center mt-2'>
        <h2 className='text-[24px] font-bold text-text-base-light mb-0'>{title}</h2>
        <Link href={link} className='text-sm font-bold text-[#b3b3b3]'>
          Xem tất cả
        </Link>
      </div>
      <div className='listCard'>
        {listData.map((item, index) => (
          <Card isActive={index < numberOfColumnInGrid?.column} key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default ListCard;
