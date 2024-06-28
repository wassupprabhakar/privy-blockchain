import { Button } from '@/components/ui/button';
interface BtnProps {
  buttonText: string
}

export default function Pay_Button({ buttonText }: BtnProps) {
  return (
    <>
      <div className="flex items-center justify-center cursor-pointer">
        <div className="h-14 w-full rounded-full bg-gradient-to-r to-[#2E2E2E] via-[#2A2A2A] from-[#ECECEC] p-[1px] hover:bg-gradient-to-l">
          <div className="flex h-full w-full rounded-full items-center justify-center bg-[#181818] px-12">
            <h1 className="text-2xl font-black text-white">{buttonText}</h1>
          </div>
        </div>
      </div>
    </>
  )
}