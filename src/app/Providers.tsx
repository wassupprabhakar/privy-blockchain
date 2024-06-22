'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PrivyAuthProviders from './_Privy/PrivyAuthProvider';
import WagmiConfigProviders from './_Wagmi/WagmiConfigProvider';
const queryClient = new QueryClient();

export default function Providers({children}: {children: React.ReactNode}) {
  return (
    <PrivyAuthProviders>
      <QueryClientProvider client={queryClient}>
        <WagmiConfigProviders>
          {children}
        </WagmiConfigProviders>
      </QueryClientProvider>
    </PrivyAuthProviders>
  );
}