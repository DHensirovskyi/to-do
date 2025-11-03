'use client'

import TaskLeft from "./TasksLeft";
import TaskRight from "./TaskRight";
import { useState, useEffect } from "react";

export interface VitalProps {
  tasks: {
    _id: string;
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

export default function VitalTask() {
  const [tasks, setTasks] = useState<VitalProps["tasks"]>([]);
  const [selectedTask, setSelectedTask] = useState<VitalProps["tasks"][number] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/tasks');
      const data = await response.json() as VitalProps["tasks"];
      const mappedData = data.map((task: VitalProps["tasks"][number], index: number) => ({
        ...task,
        id: index + 1,
        _id: task._id
      }));
      setTasks(mappedData);
    } catch (err) {
      console.error('Failed to fetch tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <main className="h-full xl:px-14 xl:py-8 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#228be6]/20 border-t-[#228be6]"></div>
          <p className="mt-4 text-[#A1A3AB]">Loading tasks...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="h-full xl:px-14 xl:py-8">
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 h-full">
        <TaskLeft
          tasks={tasks}
          onSelect={setSelectedTask}
          selectedTaskId={selectedTask?.id || null}
        />
        <TaskRight task={selectedTask} onTaskDeleted={fetchTasks} />
      </div>
    </main>
  );
}