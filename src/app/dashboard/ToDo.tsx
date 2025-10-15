import { MdOutlinePendingActions } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import Image from "next/image";

const today = new Date();
const day = today.getDate();
const month = today.toLocaleString('en', { month: 'long' });
const formattedDate = `${day} ${month}`;

const tasks = [
  {
    id: 1,
    title: "Attend Nichol's Birthday Party",
    description: "Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements) and then go to the supermarket to buy drinks",
    priority: "Moderate",
    status: "Not Started",
    createdDate: "20/06/2025",
    image: "/tasksDashboard/img1.jpg",
    color: "#F21E1E"
  },
  {
    id: 2,
    title: "Finish React Project Documentation",
    description: "Complete the API documentation and write unit tests for the new components. Don't forget to update the README file with installation instructions",
    priority: "High",
    status: "In Progress",
    createdDate: "18/06/2025",
    image: "/tasksDashboard/img2.jpg",
    color: "#42ADE2"
  },
  {
    id: 3,
    title: "Weekly Team Meeting Preparation",
    description: "Prepare presentation slides for the quarterly review, gather performance metrics, and schedule one-on-one meetings with team members",
    priority: "Low",
    status: "Completed",
    createdDate: "15/06/2025",
    image: "/tasksDashboard/img3.jpg",
    color: "#4CAF50"
  }
];

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

export default function ToDo(){
  return(
    <section className="rounded-[8px] p-3.5 shadow-xl flex flex-col gap-5 bg-[#fafbfd]">
      <div className="flex flex-col gap-2.5 w-full">
        <div className="flex justify-between">
          <div className="flex justify-center items-center gap-1">
            <MdOutlinePendingActions color="#A1A3AB" size={30}/>
            <p className="text-[1rem] font-medium">To-Do</p>
          </div>
          <button className="flex justify-center items-center gap-1 border-[1px] border-transparent hover:border-[#F24E1E] p-1 rounded-[6px] cursor-pointer active:border-[#F24E1E] active:scale-95 transition duration-200">
            <FaPlus color="#F24E1E" size={10}/>
            <p className="text-[#A1A3AB] text-[0.75rem]">Add task</p>
          </button>
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
                <div className="flex-shrink-0">
                  <Image 
                    src={task.image} 
                    width={90} 
                    height={90} 
                    alt={`task-${task.id}`}
                    className="rounded-[4px] object-cover"
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