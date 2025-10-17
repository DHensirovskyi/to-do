import Image from "next/image";
import { IoPersonAddSharp } from "react-icons/io5";
import ToDo from "./ToDo";
import TaskStatus from "./TaskStatus";
import CompletedTask from "./CompletedTask";
import InviteModal from "./InviteModal";

const usersImg = [
    '/usersImgDashboard/img1.svg',
    '/usersImgDashboard/img2.svg',
    '/usersImgDashboard/img3.svg',
    '/usersImgDashboard/img4.svg',
    '/usersImgDashboard/img5.svg',
]

export default function Dashboard() {
  return (
    <main className="xl:px-14 xl:py-8">
      <section className="w-full flex flex-col">
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-4">
            <h1 className="text-[2.25rem] text-black font-medium">Welcome back, Sundar 👋</h1>
            <div className="flex gap-5 xl:ml-auto items-center">
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
        <div className=" rounded-[8px] border border-black/20 grid xl:gap-4 gap-2 grid-cols-1 xl:grid-cols-2 xl:mt-10 mt-0 p-5">
            <ToDo />
            <div className="flex flex-col xl:gap-4 gap-2 ">
                <TaskStatus />
                <CompletedTask />
            </div>
        </div>
      </section>
    </main>
  );
}