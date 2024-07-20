import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import RecoilContextProvider from './recoilContextProvider';
import ApolloProviderWrapper from './apolloProvider';
import SnackbarProviderWrapper from './snackbarProvider';
import './globals.css';

const montserrat = Montserrat({ subsets: ['vietnamese'], weight: ['400', '500', '600', '700', '800', '900'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>
        <ApolloProviderWrapper>
          <RecoilContextProvider>
            <SnackbarProviderWrapper>{children}</SnackbarProviderWrapper>
          </RecoilContextProvider>
        </ApolloProviderWrapper>
      </body>
    </html>
  );
}
