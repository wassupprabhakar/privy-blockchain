import { useReadContract, useAccount } from 'wagmi'
//import { optimismAbi } from './optimismAbi';
import { abi } from './baseAbi';
import Big from 'big.js'; // Import big.js

export const ReadContract = () => {
  const { address } = useAccount();
  const contractAddress = process.env.NEXT_PUBLIC_BASE_CONTRACT_ID as `0x${string}` | undefined;

  const { data, isError, isLoading } = useReadContract({
    abi,
    address: contractAddress,
    functionName: 'balanceOf',
    args: address ? [address, BigInt(1)] : undefined,
  });

  let balance;
  if (data) {
    balance = new Big(data.toString()).toString();
  }


  if (isLoading) return <div>Loading... </div>;
  if (isError) return <div>Error loading balance </div>;

  return (
    <>
      <div>
        <h1>Contract data</h1>
        <p>{balance ? balance : 'No data available'}</p>
      </div>
    </>
  );
};