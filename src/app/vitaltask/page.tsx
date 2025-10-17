'use client'

import TaskLeft from "./TasksLeft";
import TaskRight from "./TaskRight";
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
    id: 1,
    title: "Refactor Dashboard Components",
    description:
      "Clean up and refactor TaskLeft and TaskRight components for better reusability. Focus on code readability and modularity.",
    priority: "High",
    status: "In Progress",
    createdDate: "15/10/2025",
    image: "/tasksDashboard/img1.jpg",
    color: "#F21E1E",
  },
  {
    id: 2,
    title: "Design Team Standup",
    description:
      "Prepare short progress summary for today’s team meeting. Highlight achievements and blockers for the sprint review.",
    priority: "Moderate",
    status: "Not Started",
    createdDate: "17/10/2025",
    image: "/tasksDashboard/img2.jpg",
    color: "#42ADE2",
  },
  {
    id: 3,
    title: "Implement User Authentication",
    description:
      "Add JWT-based login and signup functionality. Restrict access to dashboard for non-authenticated users.",
    priority: "Extreme",
    status: "Not Started",
    createdDate: "12/10/2025",
    image: "/tasksDashboard/img3.jpg",
    color: "#FF4C29",
  },
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