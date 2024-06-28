/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className=" relative text-white  items-center py-2 px-8">

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
        <div className=" md:pl-16 md:pr-16 md:py-11 rounded-lg shadow-lg md:col-span-7">
          
          <h2 className="text-[100px] bg-clip-text text-transparent bg-gradient-to-b from-[#ECECEC] to-[#2E2E2E] ">PRACTICAL MAGICK</h2>
          <div className='text-[24px] font-[Longevity]'>
            <p className="mb-4">
              Our first comic, 'Practical Magick,' brings to life gothic and witchy tales inspired by the cult classic 'The Craft.' It stars my iconic Sad Girls Bar characters as the main protagonists. The story follows two young witches who discover their magical abilities. As they delve deeper, they uncover dark secrets about their own lineage and the town's history.
            </p>
            <p className="mb-4">
              This comic is a part of Coven Classics, a digital graphic novel series that reimagines classic stories with a fresh, dark-femme twist.
            </p>
          </div>
          <div className="flex items-center mb-4 font-[Longevity]">
            <label className="mr-2">Select the number of copies you want to mint:</label>
            <input type="number" min="1" className="bg-[#181818]  p-2 rounded-lg text-black" />
          </div>
          <p className="text-gray-400 mb-4">* If you purchase more than five digital comics, you will be eligible to claim and receive a physical copy of the comic by mail. Please allow us up to two months for shipping.</p>
          <div className="flex space-x-4">
            <Button variant="default">PAY WITH CASH</Button>
            <Button variant="default">PAY WITH CRYPTO</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
