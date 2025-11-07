import { MdOutlinePendingActions } from "react-icons/md";
import Image from "next/image";
import CreateTaskModal from "../modalWindows/CreateTaskModal";
import UpdateTaskModal from "../modalWindows/UpdateTaskModal";
import { VitalProps } from "../mytask/page";

const today = new Date();
const day = today.getDate();
const month = today.toLocaleString('en', { month: 'long' });
const formattedDate = `${day} ${month}`;

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

type ToDoTasks = VitalProps & {
  selectedTaskId?: number | null;
};


export default function ToDo({ tasks }: ToDoTasks){
  return(
    <section className="rounded-[8px] p-3.5 shadow-xl flex flex-col gap-5 bg-[#fafbfd]">
      <div className="flex flex-col gap-2.5 w-full">
        <div className="flex justify-between">
          <div className="flex justify-center items-center gap-1">
            <MdOutlinePendingActions color="#A1A3AB" size={30}/>
            <p className="text-[1rem] font-medium">To-Do</p>
          </div>
          <CreateTaskModal />
        </div>
        <div className="flex gap-2 items-center">
          <div>
            <p className="text-[0.75rem]">{formattedDate}</p>
          </div>
          <div>
            <p className="text-[0.75rem] text-[#A1A3AB]">• Today</p>
          </div>
        </div>
      </div>

      <div className="px-2 flex flex-col gap-5">
        {tasks.map((task) => (
          <div key={task.id} className="flex flex-col gap-3">
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
                <UpdateTaskModal dots={true} task={task} />
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

            
        ))}
      </div>
    </section>
  );
}