// src/app/mytask/page.tsx
'use client'

import TaskLeft from "./TasksLeft";
import TaskRight from "./TaskRight";
import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client/react";
import { GET_TASKS, DELETE_TASK } from '../lib/graphql/operations';

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

export default function MyTask() {
  const [selectedTask, setSelectedTask] = useState<VitalProps["tasks"][number] | null>(null);
  
  const { data, loading, error, refetch } = useQuery<{ tasks: VitalProps["tasks"] }>(GET_TASKS);
  const [deleteTaskMutation] = useMutation(DELETE_TASK);

  const tasks = data?.tasks.map((task: VitalProps["tasks"][number], index: number) => ({
    ...task,
    id: index + 1,
  })) || [];

  const handleTaskDeleted = async () => {
    if (selectedTask?._id) {
      try {
        await deleteTaskMutation({
          variables: { id: selectedTask._id }
        });
        setSelectedTask(null);
        await refetch();
      } catch (err) {
        console.error('Failed to delete task:', err);
      }
    }
  };

  if (loading) {
    return (
      <section className="h-full xl:px-14 xl:py-8 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#228be6]/20 border-t-[#228be6]"></div>
          <p className="mt-4 text-[#A1A3AB]">Loading tasks...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="h-full xl:px-14 xl:py-8 flex items-center justify-center">
        <div className="text-center text-red-500">
          <p>Error loading tasks: {error.message}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="h-full xl:px-14 xl:py-8">
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 h-full items-start">
        <TaskLeft
          tasks={tasks}
          onSelect={setSelectedTask}
          selectedTaskId={selectedTask?.id || null}
        />
        <TaskRight task={selectedTask} onTaskDeleted={handleTaskDeleted} />
      </div>
    </section>
  );
}