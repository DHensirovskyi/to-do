// src/app/dashboard/page.tsx
'use client'

import Image from "next/image";
import ToDo from "./ToDo";
import TaskStatus from "./TaskStatus";
import CompletedTask from "./CompletedTask";
import InviteModal from "../modalWindows/InviteModal";
import { useQuery } from "@apollo/client/react";
import { GET_TASKS } from '../lib/graphql/operations';
import { VitalProps } from "../mytask/page";

const usersImg = [
    '/usersImgDashboard/img1.svg',
    '/usersImgDashboard/img2.svg',
    '/usersImgDashboard/img3.svg',
    '/usersImgDashboard/img4.svg',
    '/usersImgDashboard/img5.svg',
];

export default function Dashboard() {
  type GetTasksData = { tasks: VitalProps["tasks"] };
  const { data, loading, error } = useQuery<GetTasksData>(GET_TASKS);

  const tasks = data?.tasks.map((task: VitalProps["tasks"][number], index: number) => ({
    ...task,
    id: index + 1,
  })) || [];

  if (loading) {
    return (
      <section className="h-full xl:px-14 xl:py-8 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#228be6]/20 border-t-[#228be6]"></div>
          <p className="mt-4 text-[#A1A3AB]">Loading dashboard...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="h-full xl:px-14 xl:py-8 flex items-center justify-center">
        <div className="text-center text-red-500">
          <p>Error loading dashboard: {error.message}</p>
        </div>
      </section>
    );
  }

  return (
    <div className="xl:px-14 xl:py-8">
      <section className="w-full flex flex-col">
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-4">
            <h1 className="sm:text-[2.25rem] text-[2rem] text-black font-medium">Welcome back, Sundar 👋</h1>
            <div className="flex gap-5 xl:ml-auto items-center xl:mb-0 mb-10">
                <div className="flex gap-1">
                {usersImg.map((img, index) => (
                    <div key={img} className="relative">
                        <Image 
                            src={img} 
                            alt={img} 
                            width={36} 
                            height={36}
                            className={`rounded-[8px] ${
                                index === usersImg.length - 1 
                                    ? 'bg-[#363636] brightness-50' 
                                    : ''
                            }`}
                        />
                        {index === usersImg.length - 1 && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-white text-xs font-medium">+4</span>
                            </div>
                        )}
                    </div>
                ))}
                </div>
                <InviteModal />
            </div>
        </div>
        <div className=" rounded-[8px] border border-black/20 grid xl:gap-4 gap-0 grid-cols-1 xl:grid-cols-2 xl:mt-10 mt-0 xl:p-5">
            <ToDo tasks={tasks}/>
            <div className="flex flex-col xl:gap-4 gap-2 ">
                <TaskStatus />
                <CompletedTask />
            </div>
        </div>
      </section>
    </div>
  );
}