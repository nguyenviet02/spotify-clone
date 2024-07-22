'use client';

import { ApolloProvider } from '@apollo/client';
import client from '@/lib/graphql/apollo-client';

const ApolloProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  let refreshToken = '';
  let accessToken = '';
  if (typeof window !== 'undefined') {
    refreshToken = localStorage.getItem('refreshToken') || '';
    accessToken = localStorage.getItem('token') || '';
  }
  const apolloClient = client(accessToken, refreshToken);
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default ApolloProviderWrapper;
