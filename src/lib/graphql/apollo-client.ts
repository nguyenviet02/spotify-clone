import { ApolloClient, InMemoryCache, HttpLink, ApolloLink, concat } from '@apollo/client';
import 'dotenv/config';

const client = (accessToken?: string) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const httpLink = new HttpLink({ uri: API_URL });
  const authMiddleware = new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        authorization: accessToken ? `${accessToken}` : ''
      }
    }));

    return forward(operation);
  });
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: concat(authMiddleware, httpLink),
    connectToDevTools: true
  });
};

export default client;
