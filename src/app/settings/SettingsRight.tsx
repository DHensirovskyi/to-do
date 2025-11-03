import Image from "next/image";
import { MdModeEdit } from "react-icons/md";

export default function TaskRight({ tab, getTab }: { tab: 'profile' | 'account', getTab: (tab: 'profile' | 'account') => void }){
  if(tab === 'profile'){
    getTab('profile');
    return (
      <section className="flex flex-col gap-5 justify-between border rounded-[8px] border-black/20 bg-white p-5 xl:col-span-2 col-span-1 w-full">
          <div className="flex flex-col gap-3.5 text-left justify-center items-center w-full">
            <span className="border-3 rounded-full border-[#228be6]">
              <Image src={'/userImage.svg'} alt={"userImage"} height={150} width={150} className="aspect-[1/1]"/>
            </span>
            <div className="flex flex-col gap-3 w-full">
              <div className="flex gap-2 items-stretch w-full">
                <div className="p-2.5 border-1 border-black/15 rounded-[12px] flex-1">
                  <p className="text-[0.75rem] text-black/70 font-medium">Full Name: <span className="text-[1rem] font-semibold">Sundar Gurung</span></p>
                </div>

                <button className="bg-[#228be6] px-3 cursor-pointer rounded-[8px] flex justify-center items-center shrink-0 active:scale-98 hover:bg-[#339af0]">
                  <MdModeEdit color="white" size={20}/>
                </button>
              </div>

              <div className="flex gap-2 items-stretch w-full">
                <div className="p-2.5 border-1 border-black/15 rounded-[12px] flex-1">
                  <p className="text-[0.75rem] text-black/70 font-medium">Email: <span className="text-[1rem] font-semibold break-all">sundargurung360@gmail.com</span></p>
                </div>

                <button className="bg-[#228be6] px-3 cursor-pointer rounded-[8px] flex justify-center items-center shrink-0 active:scale-98 hover:bg-[#339af0]">
                  <MdModeEdit color="white" size={20}/>
                </button>
              </div>
              
            </div>
          </div>
      </section>
    );
  }










  if(tab === 'account'){
    getTab('account');
    return (
      <section className="w-full flex flex-col justify-between border rounded-[8px] border-black/20 bg-white p-5 xl:col-span-2 col-span-1">
        <h1>Account</h1>
      </section>
    );
  }
}