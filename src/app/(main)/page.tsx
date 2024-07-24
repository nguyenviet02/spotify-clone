'use client';

import { useMeQuery } from '@/lib/graphql/graphql';

export default function Home() {
  const me = useMeQuery();
  return <h1 className='text-text-base-light'>{me?.data?.user_me?.displayName}</h1>;
}
