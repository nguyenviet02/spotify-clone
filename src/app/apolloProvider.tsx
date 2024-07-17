'use client';

import { ApolloProvider } from '@apollo/client';
import client from '@/lib/graphql/apollo-client';

const apolloClient = client();
const ApolloProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default ApolloProviderWrapper;
