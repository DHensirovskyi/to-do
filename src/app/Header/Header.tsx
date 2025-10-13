'use client'

import { Burger, Drawer, ScrollArea } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { useState } from "react";
import Image from "next/image";
import { FaExclamation } from "react-icons/fa6";
import { MdTask } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { IoListOutline } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { IoHelpCircleSharp } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { DashboardUser } from "../Sidebar/Sidebar";
import TextInputMobile from "./TextInputMobile";
import TextInputDesktop from "./TextInputDesktop";


const pageTitles = {
  '/dashboard': 'Dashboard',
  '/vitaltask': 'Vital Task', 
  '/mytask': 'My Task',
  '/taskcategories': 'Task Categories',
  '/settings': 'Settings',
  '/help': 'Help',
  '/logout': 'Logout'
};

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
    slug: 'vitaltask',
    icon: <FaExclamation size={25}/>,
    name: 'Vital Task'
  },
  {
    slug: 'mytask',
    icon: <MdTask size={25}/>,
    name: 'My Task'
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


export default function Header() {
  const [value, setValue] = useState('');
  const [opened, { toggle, close }] = useDisclosure(false);
  const pathname = usePathname()

  const handleSearch = () => {
    console.log("🔍 Searching for:", value);
  };

  

  return (
    <header className="h-25 bg-[#363636] text-white p-[30px] flex justify-center items-center">
      <section className="max-w-[1650px] w-full flex items-center justify-between">
        <Burger 
          opened={opened}
          onClick={toggle}
          color="white"
          size="md"
          className="md:hidden"
        />
        <h2 className="font-semibold sm:text-[2rem] text-[1.5rem]">
          <span className="text-white">{pageTitles[pathname as keyof typeof pageTitles] ?? "To-Do"}</span>
        </h2>

        

        <div className="hidden gap-10 flex-1 ml-10 lg:ml-20 md:flex ">
          <TextInputDesktop />
        </div>
      </section>

      <Drawer
        opened={opened}
        onClose={close}
        position="left"
        size="sm"
        offset={0}
        overlayProps={{ opacity: 0.01}}
        styles={{
          content: { backgroundColor: '#383838'},
          header: { backgroundColor: '#383838', borderBottom: '2px solid rgb(255,255,255,0.5)'},
          close: { color: 'white'},
          title: {color: 'white', fontWeight: '500'}
        }}
        className="flex flex-col md:hidden"
        scrollAreaComponent={ScrollArea.Autosize}
        title={pageTitles[pathname as keyof typeof pageTitles] ?? "To-Do"}
      >
      <aside className="flex-col w-full bg-[#383838] text-white px-5 rounded-r-[10px]">
        <section className="flex flex-col justify-between mt-10">
            <TextInputMobile />
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
                      className={`rounded-[14px] p-4 cursor-pointer hover:bg-white/10 hover:text-white flex flex-col w-full transition-colors active:scale-98 ${
                        isActive ? 'bg-white text-[#383838]' : ''
                      }`}
                      onClick={close}
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
              className={`rounded-[14px] p-4 cursor-pointer hover:bg-white/10 hover:text-white flex flex-col w-full transition-colors active:scale-98  ${pathname === '/logout' ? 'bg-white text-[#383838]' : ''}`}>
              <div className="flex gap-4 items-center">
                <MdOutlineLogout size={25}/>
                <p className="text-[1rem] font-medium">
                  Logout
                </p>
              </div>
            </Link>
          </section>
        </aside>
      </Drawer>
    </header>
  );
}