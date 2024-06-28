'use client';
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Pay_Button from './_component/Pay_Button';
import { useEffect, useState } from 'react';

import { usePrivy } from "@privy-io/react-auth";

import { useSwitchChain, useWalletClient } from 'wagmi';
import { parseEther } from 'viem';

import {
  type BaseError,
  useSendTransaction,
  useWaitForTransactionReceipt,
} from 'wagmi';

export default function HomePage() {
  const [quantity, setQuantity] = useState(1);

  const {
    ready,
    login,
    logout,
    authenticated,
    user
  } = usePrivy();

  const { data: walletClient } = useWalletClient();

  const [chainId, setChainId] = useState<string | null>(null);
  const {
    error: switchNetworkError,
    switchChain,
  } = useSwitchChain();

  useEffect(() => {
    if (!walletClient) return;

    walletClient?.getChainId().then((chainId) => {
      //console.log("chain id = ", wallets);
      if (chainId !== 84532) {
        //console.log("not set chain");
        switchChain({ chainId: 84532 });
      }
      setChainId(chainId.toString());
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [walletClient]);

  const {
    data: hash,
    error,
    isPending,
    sendTransaction,
  } = useSendTransaction();

  const walletAddress = process.env.NEXT_PUBLIC_WALLET_ADDRESS;
  const baseAmountString = process.env.NEXT_PUBLIC_BASE_AMOUNT;
  const baseAmount = Number(baseAmountString);
  const handleCryptoPurchase = () => {
    if (walletAddress && baseAmount && !isNaN(baseAmount)) {
      const totalAmount = baseAmount * quantity;
      sendTransaction({ to: walletAddress as `0x${string}`, value: parseEther(totalAmount.toString()) });
    }
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  
  const handleCashPurchase = () => {
    const url = "https://shop.covenclassics.com/cart/48787580780834:"+quantity;
    window.open(url, '_blank');
  }
  return (
    <div className=" relative text-white  items-center py-2 px-8 lg:px-12">

      <main className="flex flex-col md:grid grid-cols-12">
        <div className='md:col-span-5'>
          <Image
            src="/images/coven_classic.png"
            alt="Practical Magick"
            className="rounded-lg md:h-5/6"
            width="600"
            height="800"
          />
        </div>
        <div className=" px-10 lg:px-16 md:py-7 rounded-lg shadow-lg md:col-span-7">

          <h2 className="text-[100px] leading-[9rem] bg-clip-text text-transparent bg-gradient-to-b from-[#ECECEC] to-[#2E2E2E] ">PRACTICAL MAGICK</h2>
          <div className='text-[24px] font-[Longevity]'>
            <p className="mb-4 leading-7">
              Our first comic, 'Practical Magick,' brings to life gothic and witchy tales inspired by the cult classic 'The Craft.' It stars my iconic Sad Girls Bar characters as the main protagonists. The story follows two young witches who discover their magical abilities. As they delve deeper, they uncover dark secrets about their own lineage and the town's history.
            </p>
            <p className="mb-4">
              This comic is a part of Coven Classics, a digital graphic novel series that reimagines classic stories with a fresh, dark-femme twist.
            </p>
          </div>
          {ready && authenticated &&
            <div className="flex h-14 items-center mb-4 font-[Longevity] border-[1px] rounded-md">
              <div className='w-[15%] px-3 text-[40px] cursor-pointer' onClick={() => setQuantity(quantity + 1)}>
                +
              </div>
              <div className='w-[70%]'>
                <input className='bg-[#181818] w-full rounded-lg focus:border-[#181818] text-center text-lg' placeholder='SELECT THE NUMBER OF COPIES YOU WANT TO MINT' name='qty' defaultValue={quantity} readOnly />
              </div>
              <div className='w-[15%] text-right px-3 text-[40px] cursor-pointer' onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
                -
              </div>
            </div>
          }
          <p className="font-[ComicNeueLightItalic] text-base  text-white leading-5 mb-4">* If you purchase more than five digital comics, you will be eligible to claim and receive a physical copy of the comic by mail. Please allow us up to two months for shipping.</p>
          {ready &&
            <div className="flex space-x-7 md:space-x-8 lg:space-x-10  pt-4">
              {authenticated &&
                <>
                  <Pay_Button buttonText="PAY WITH CASH" onClick={handleCashPurchase} />
                  <Pay_Button buttonText={isPending ? 'Confirming...' : 'PAY WITH CRYPTO'} onClick={handleCryptoPurchase} isDisabled={isPending} />

                </>
              }
              {!authenticated &&
                <>
                  <Pay_Button buttonText="Login" onClick={login} />
                </>
              }
            </div>
          }
          {ready && authenticated &&
            <>
              <div className='mt-2 font-sans'>
                {isConfirming && <div>Waiting for confirmation...</div>}
                {isConfirmed && <div>Transaction confirmed.</div>}
                {error && (
                  <div>Error: {(error as BaseError).shortMessage || error.message}</div>
                )}
              </div>
              <div className='mt-2 w-3/6'>
                <Pay_Button buttonText="Logout" onClick={logout} />
              </div>
            </>
          }
        </div>
      </main>
    </div>
  );
}
