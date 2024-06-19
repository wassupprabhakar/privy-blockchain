import { createConfig } from '@privy-io/wagmi'
import { http } from 'wagmi'
import { base, mainnet, optimism } from 'viem/chains';

export const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
    [optimism.id]: http(),
  },
})