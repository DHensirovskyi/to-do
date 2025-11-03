'use client'

import Image from "next/image";
import type { VitalProps } from "./page";
import CreateTaskModal from "../modalWindows/CreateTaskModal";

export const getStatusColor = (status: string) => {
  switch (status) {
    case "Not Started": return "#F21E1E";
    case "In Progress": return "#FF9800";
    case "Completed": return "#4CAF50";
    default: return "#228be6";
  }
};

export const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "High": return "#F21E1E";
    case "Moderate": return "#42ADE2";
    case "Low": return "#4CAF50";
    default: return "#228be6";
  }
};

type TaskLeftProps = VitalProps & {
  onSelect: (task: VitalProps["tasks"][number]) => void;
  selectedTaskId?: number | null;
};

export default function TaskLeft({ tasks, onSelect, selectedTaskId }: TaskLeftProps) {
  return (
    <section className="w-full flex flex-col gap-4 border rounded-[8px] border-black/20 bg-white xl:p-5 p-2.5">
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-[1rem] font-semibold">My Tasks</h1>
          <div className="border-b-2 border-[#228be6] w-20" />
        </div>
        <CreateTaskModal />
      </div>
      <div className="px-2 flex flex-col gap-5">
        {tasks.map((task) => {
          const isSelected = task.id === selectedTaskId;

          return (
            <div
              key={task.id}
              className={`text-left cursor-pointer rounded-[8px] border p-3 flex flex-col gap-4
                          ${isSelected ? "bg-[#fafbfd] border-[#228be6] shadow-md" : "bg-white border-black/20"} transition-colors duration-200`}
              role="button"
              tabIndex={0}
              onClick={() => onSelect(task)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") onSelect(task);
              }}
            >
              <div className="flex flex-col gap-3">
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
          );
        })}
      </div>
    </section>
  );
}
