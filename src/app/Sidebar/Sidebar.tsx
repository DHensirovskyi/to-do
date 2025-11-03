'use client'

import Image from "next/image";
import { MdTask } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { IoListOutline } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { IoHelpCircleSharp } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";



export interface DashboardUser{
  image: string,
  name: string,
  email: string,
}

const DashboardUser: DashboardUser[] = [
  {
    image: "/userImage.svg",
    name: "Sundar Gurung",
    email: "sundargurung360@gmail.com"
  }
];
const DashboardControls = [
  {
    slug: 'dashboard',
    icon: <MdDashboard size={25}/>,
    name: 'Dashboard'
  },
  {
    slug: 'mytask',
    icon: <MdTask size={25}/>,
    name: 'My Tasks'
  },
  {
    slug: 'taskcategories',
    icon: <IoListOutline size={25}/>,
    name: 'Task Categories'
  },
  {
    slug: 'settings',
    icon: <IoMdSettings size={25}/>,
    name: 'Settings'
  },
   {
    slug: 'help',
    icon: <IoHelpCircleSharp size={25}/>,
    name: 'Help'
  },
];

export default function Sidebar() {
    const pathname = usePathname()

    return(
        <aside className="hidden md:flex flex-col w-80 bg-gradient-to-b from-[#1B486E] to-[#212540] text-white py-9 px-5 shadow-md shadow-black/50">
          <section className="flex flex-col justify-between h-[100%]">
            <div className="flex flex-col gap-5">
              {DashboardUser.map((user) => (
                <div key={user.email} className="flex flex-col gap-3.5 text-center justify-center items-center">
                  <span className="border-1 rounded-full">
                    <Image src={user.image} alt={"userImage"} height={86} width={86} className="aspect-[1/1]"/>
                  </span>
                  <div className="flex flex-col">
                    <p className="text-[1rem] font-semibold">{user.name}</p>
                    <p className="text-[0.75rem]">{user.email}</p>
                  </div>
                </div>
              ))}
              <div>
                {DashboardControls.map((control) => {
                  const isActive = pathname === `/${control.slug}`;

                  return (
                    <Link 
                      href={`/${control.slug}`}
                      key={control.slug}
                      className={`rounded-[14px] p-4 cursor-pointer hover:bg-white/5 hover:text-white flex flex-col w-full transition-colors active:scale-98 ${
                        isActive ? 'bg-white text-[#1F395B]' : ''
                      }`}
                    >
                      <div className="flex gap-4 items-center">
                        {control.icon}
                        <p className="text-[1rem] font-medium">
                          {control.name}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
            <Link 
              href={'/logout'} 
              className={`rounded-[14px] p-4 cursor-pointer hover:bg-white/5 hover:text-white flex flex-col w-full transition-colors active:scale-98  ${pathname === '/logout' ? 'bg-white text-[#1F395B]' : ''}`}>
              <div className="flex gap-4 items-center">
                <MdOutlineLogout size={25}/>
                <p className="text-[1rem] font-medium">
                  Logout
                </p>
              </div>
            </Link>
          </section>
        </aside>
    )
}