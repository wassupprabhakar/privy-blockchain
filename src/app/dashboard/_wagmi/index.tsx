import { useReadContract, useAccount } from 'wagmi'
import { abi } from './abi'


export const ReadContract = () => {
  const { address } = useAccount();

  const { data, isError, isLoading } = useReadContract({
    abi,
    address: '0xaDAd81B5D4E8A548D8638B4052166971cbCa22C4',
    functionName: 'balanceOf',
    args: address ? [address, BigInt(1)] : undefined,
  });

  if (isLoading) return <div>Loading... </div>;
  if (isError) return <div>Error loading balance </div>;

  return (
    <>
      <div>
        <h1>Contract data</h1>
        <p>{data ? data : 'No data available'}</p>
      </div>
    </>
  );
};