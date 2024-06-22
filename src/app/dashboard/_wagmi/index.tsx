import { useReadContract } from 'wagmi'
import { abi } from './abi'

interface AppProps {
  userAddress: any;
}

export const GetBalance = ({ userAddress }: AppProps) => {
  const { data, isError, isLoading } = useReadContract({
    abi,
    address: userAddress,
    functionName: 'balanceOf',
    args: [userAddress],
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading balance</div>;

  return (
    <>
      <div>
        <h1>User Balance</h1>
        <p>{data ? data : 'No balance available'}</p>
      </div>
    </>
  );
};