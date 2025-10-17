import { MdOutlineTask } from "react-icons/md";
import Image from "next/image";

const tasks = [
  {
    id: 1,
    title: "Walk the dog",
    description: "Take the dog to the park and bring treats as well.",
    status: "Completed",
    completedDate: "18/06/2025",
    image: "/tasksDashboard/img4.jpg",
    color: "#05A301"
  },
  {
    id: 2,
    title: "Conduct meeting",
    description: "Meet with the client and finalize requirements.",
    status: "Completed",
    completedDate: "15/06/2025",
    image: "/tasksDashboard/img5.jpg",
    color: "#05A301"
  }
];

export default function CompletedTask(){
  return(
    <section className="rounded-[8px] p-3.5 shadow-xl flex flex-col gap-5 bg-[#fafbfd]">
      <div className="flex flex-col gap-2.5 w-full">
        <div className="flex justify-between">
          <div className="flex justify-center items-center gap-1">
            <MdOutlineTask color="#A1A3AB" size={30}/>
            <p className="text-[1rem] font-medium">Completed</p>
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
                  Status:{" "}
                  <span style={{ color: "#05A301" }}>
                    {task.status}
                  </span>
                </p>
              </div>
              <div>
                <p className="text-[#A1A3AB]">Completed on: {task.completedDate}</p>
              </div>
            </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}