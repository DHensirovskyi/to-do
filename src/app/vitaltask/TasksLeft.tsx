'use client'

import Image from "next/image";
import type { VitalProps } from "./page";

const getStatusColor = (status: string) => {
  switch (status) {
    case "Not Started": return "#F21E1E";
    case "In Progress": return "#FF9800";
    case "Completed": return "#4CAF50";
    default: return "#A1A3AB";
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "High": return "#F21E1E";
    case "Moderate": return "#42ADE2";
    case "Low": return "#4CAF50";
    default: return "#A1A3AB";
  }
};

type TaskLeftProps = VitalProps & {
  onSelect: (task: VitalProps["tasks"][number]) => void;
};

export default function TaskLeft({ tasks, onSelect }: TaskLeftProps) {
  return (
    <section className="w-full flex flex-col gap-4 border rounded-[8px] border-black/20 p-3.5">
      <div className="flex flex-col gap-1">
        <h1 className="text-[1rem] font-semibold">Vital tasks</h1>
        <div className="border-b-2 border-[#F24E1E] w-20"/>
      </div>
      <div className="px-2 flex flex-col gap-5">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="text-left cursor-pointer"
            role="button"
            tabIndex={0}
            onClick={() => onSelect(task)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") onSelect(task);
            }}
          >
                <div className="flex flex-col gap-3 cursor-pointer">
                  <div className="rounded-[8px] border border-black/20 flex flex-col gap-4 p-3">
                    <div className="grid grid-cols-[1fr_auto] items-start gap-3 max-w-full">
                      <div className="flex items-center gap-3 min-w-0">
                        <span 
                          className="border-[2px] rounded-full p-1 flex-shrink-0" 
                          style={{ borderColor: task.color }}
                        />
                        <p className="font-semibold text-[1rem] text-black break-words overflow-hidden">
                          {task.title}
                        </p>
                      </div>
                      <button className="flex items-baseline cursor-pointer gap-0.5 hover:[&_span]:border-[#F24E1E] hover:[&_span]:bg-[#F24E1E] active:[&_span]:border-[#ee6136] active:[&_span]:bg-[#ee6136] active:scale-95 flex-shrink-0">
                        <span className="border border-[#A1A3AB] rounded-full p-0.5 transition-colors duration-200" />
                        <span className="border border-[#A1A3AB] rounded-full p-0.5 transition-colors duration-200" />
                        <span className="border border-[#A1A3AB] rounded-full p-0.5 transition-colors duration-200" />
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-2 max-w-full">
                      <p className="text-[#A1A3AB] text-[0.875rem] font-normal break-words overflow-hidden min-w-0">
                        {task.description}
                      </p>
                      <div className="flex-shrink-0 w-[90px] h-[90px] rounded-[14px] overflow-hidden">
                        <Image 
                          src={task.image} 
                          width={90} 
                          height={90} 
                          alt={`task-${task.id}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
      
                    <div className="flex justify-between text-[0.625rem] items-center">
                    <div className="flex gap-4 justify-center items-center">
                      <p>
                        Priority:{" "}
                        <span style={{ color: getPriorityColor(task.priority) }}>
                          {task.priority}
                        </span>
                      </p>
                      <p>
                        Status:{" "}
                        <span style={{ color: getStatusColor(task.status) }}>
                          {task.status}
                        </span>
                      </p>
                    </div>
                    <div>
                      <p className="text-[#A1A3AB]">Created on: {task.createdDate}</p>
                    </div>
                  </div>
                </div>
                </div>
                </div>
              ))}
            </div>
      </section>
  );
}