import { useReadContract, useAccount } from 'wagmi'
import { abi } from './abi'


export const ReadContract = () => {
  const { address } = useAccount();

  const { data, isError, isLoading } = useReadContract({
    abi,
    address: address,
    functionName: 'balanceOf',
    args: address ? [address, BigInt(1)] : undefined,
  });

  if (isLoading) return <div>Loading... </div>;
  if (isError) return <div>Error loading balance </div>;

  return (
    <>
      <div>
        <h1>Read contract data</h1>
        <p>{data ? data : 'No data available'}</p>
      </div>
    </>
  );
};