import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';
import 'dotenv/config';

const client = (accessToken: string, refreshToken: string) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const httpLink = new HttpLink({ uri: API_URL });

  // get response headers from the server
  const afterwareLink = new ApolloLink((operation, forward) => {
    return forward(operation).map((response) => {
      const context = operation.getContext();
      const {
        response: { headers }
      } = context;
      const newAccessToken = headers.get('Authorization');
      if (newAccessToken) {
        localStorage.setItem('token', newAccessToken);
      }
      return response;
    });
  });

  const authMiddleware = new ApolloLink((operation, forward) => {
    const accessToken = localStorage.getItem('token');
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        authorization: accessToken ? `${accessToken}` : '',
        ['x-refresh-token']: refreshToken ? `${refreshToken}` : ''
      }
    }));

    return forward(operation);
  });
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([afterwareLink, authMiddleware, httpLink]),
    connectToDevTools: true
  });
};

export default client;
