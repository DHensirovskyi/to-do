'use client'

import TaskLeft from "../vitaltask/TasksLeft";
import TaskRight from "../vitaltask/TaskRight";
import { useState } from "react";

export interface VitalProps {
  tasks: {
    id: number;
    title: string;
    description: string;
    priority: string;
    status: string;
    createdDate: string;
    color: string;
    image: string;
  }[];
}


export const tasks = [
  {
  id: 4,
  title: "Optimize Database Queries",
  description:
    "Review and optimize slow SQL queries affecting dashboard load time. Implement indexing and caching where necessary.",
  priority: "High",
  status: "In Progress",
  createdDate: "16/10/2025",
  image: "/tasksDashboard/img4.jpg",
  color: "#F21E1E",
},
{
  id: 5,
  title: "Add Dark Mode Feature",
  description:
    "Implement a dark theme toggle using Tailwind CSS and persist user preference in local storage.",
  priority: "Moderate",
  status: "Completed",
  createdDate: "10/10/2025",
  image: "/tasksDashboard/img5.jpg",
  color: "#42ADE2",
}
]

export default function Dashboard() {
  const [selectedTask, setSelectedTask] = useState<VitalProps["tasks"][number] | null>(null);

  return (
    <main className="h-full xl:px-14 xl:py-8">
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 h-full">
        <TaskLeft
          tasks={tasks}
          onSelect={setSelectedTask}
          selectedTaskId={selectedTask?.id || null}
        />
        <TaskRight task={selectedTask} />
      </div>
    </main>
  );
}