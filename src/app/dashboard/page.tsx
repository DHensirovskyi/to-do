import Image from "next/image";
import { IoPersonAddSharp } from "react-icons/io5";
import ToDo from "./ToDo";
import TaskStatus from "./TaskStatus";
import CompletedTask from "./CompletedTask";

const usersImg = [
    '/usersImgDashboard/img1.svg',
    '/usersImgDashboard/img2.svg',
    '/usersImgDashboard/img3.svg',
    '/usersImgDashboard/img4.svg',
    '/usersImgDashboard/img5.svg',
]

export default function Dashboard() {
  return (
    <main className="xl:px-18 xl:py-15 ">
      <section className="w-full flex flex-col gap-8">
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-4">
            <h1 className="text-[2rem] text-black font-medium">Welcome back, Sundar 👋</h1>
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
                <button className="w-24 h-9 border border-[#363636] rounded-[8px] p-[1rem] flex gap-1 items-center justify-center cursor-pointer hover:bg-[#363636] hover:text-white">
                    <IoPersonAddSharp />
                    <p className="text-[0.75rem font-medium text-[#363636]]">Invite</p>
                </button>
            </div>
        </div>
        <div className="border rounded-[8px] border-black/30 p-6 grid xl:gap-4 gap-2 grid-cols-1 xl:grid-cols-2 xl:mt-10 mt-0">
            <ToDo />
            <div className="border flex flex-col xl:gap-4 gap-2 ">
                <TaskStatus />
                <CompletedTask />
            </div>
        </div>
      </section>
    </main>
  );
}