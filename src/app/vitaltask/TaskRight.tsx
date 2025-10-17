import Image from "next/image";
import { MdDelete, MdModeEdit } from "react-icons/md";
import type { VitalProps } from "./page";

type TaskRightProps = {
  task: VitalProps["tasks"][number] | null;
};

export default function TaskRight({ task }: TaskRightProps) {
  if (!task) {
    return (
      <section className="w-full flex items-center justify-center border rounded-[8px] border-black/20 p-3.5">
        <p className="text-[#A1A3AB]">Choose a task</p>
      </section>
    );
  }

  return (
    <section className="w-full flex flex-col justify-between border rounded-[8px] border-black/20 bg-white p-5">
      <div className="flex flex-col gap-10">
        <div className="grid sm:grid-cols-[160px_1fr] grid-cols-1 gap-4">
          <div className="w-[160px] h-[160px] rounded-[14px] overflow-hidden">
            <Image 
              src={task.image} 
              alt={task.title} 
              height={160} 
              width={160}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-3 justify-end">
            <p className="text-[1rem] text-black font-semibold">{task.title}</p>
            <p className="text-[0.75rem]">Priority: <span style={{ color: task.color }}>{task.priority}</span></p>
            <p className="text-[0.75rem]">Status: <span style={{ color: task.color }}>{task.status}</span></p>
            <p className="text-[0.625rem] text-[#A1A3AB]">Created on: {task.createdDate}</p>
          </div>
        </div>
        <p className="text-[1rem] text-[#A1A3AB]">{task.description}</p>
      </div>

      <div className="flex items-center justify-end gap-3.5 sm:mt-0 mt-10">
        <div className="bg-[#727272] w-[36px] h-[36px] cursor-pointer rounded-[8px] flex justify-center items-center shrink-0 active:scale-98 hover:bg-[#7a7a7a]">
            <MdDelete color="white" size={20} />
        </div>
        <div className="bg-[#727272] w-[36px] h-[36px] cursor-pointer rounded-[8px] flex justify-center items-center shrink-0 active:scale-98 hover:bg-[#7a7a7a]">
            <MdModeEdit color="white" size={20}/>
        </div>
      </div>
    </section>
  );
}
