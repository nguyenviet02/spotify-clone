'use client';

import { SnackbarProvider } from 'notistack';

export default function SnackbarProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
      autoHideDuration={2000}
    >
      {children}
    </SnackbarProvider>
  );
}
