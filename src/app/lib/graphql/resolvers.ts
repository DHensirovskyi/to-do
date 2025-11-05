import { Task } from "@/models/Task";
import { Users } from "@/models/Users";
import connectDb from "@/app/lib/mongodb";

interface TaskInput {
  title: string;
  description?: string;
  completed: boolean;
  userId: string;
  // Добавьте сюда остальные поля из вашей схемы,
  // например: priority, status, color, image, category
}

export const resolvers = {
  Query: {
    tasks: async () => {
      await connectDb();
      return await Task.find().sort({ createdAt: -1 });
    },
    
    task: async (_: unknown, { id }: { id: string }) => {
      await connectDb();
      return await Task.findById(id);
    },
    
    users: async () => {
      await connectDb();
      return await Users.find().sort({ createdAt: -1 });
    },
    
    // ❌❌❌ УДАЛЕНО ❌❌❌
    // 'createTask' НЕ должна быть здесь. Query - только для получения данных.
    // Это и вызывало вашу ошибку сборки.
    /*
    createTask: async (_: unknown, { input }: { input: TaskInput }) => {
      await connectDb();
      return await Users.findById(input.userId);
    },
    */
  },

  Mutation: {
    // ✅✅✅ ИСПРАВЛЕНО ✅✅✅
    // 1. 'createTask' должна быть только здесь, в Mutation.
    // 2. Тип 'input' изменен со 'string' на 'TaskInput',
    //    чтобы соответствовать вашей Mongoose-модели Task.create().
    createTask: async (_: unknown, { input }: { input: TaskInput }) => {
      await connectDb();
      const newTask = await Task.create(input);
      return newTask;
    },
    
    updateTask: async (_: unknown, { id, input }: { id: string; input: TaskInput }) => {
      await connectDb();
      const updatedTask = await Task.findByIdAndUpdate(id, input, { new: true });
      if (!updatedTask) {
        throw new Error("Task not found");
      }
      return updatedTask;
    },
    
    deleteTask: async (_: unknown, { id }: { id: string }) => {
      await connectDb();
      const result = await Task.findByIdAndDelete(id);
      return !!result; // Возвращает true, если удаление прошло успешно
    },
    
    createUser: async (_: unknown, { input }: { input: string }) => {
      await connectDb();
      const newUser = await Users.create(input);
      return newUser;
    },
    
    updateUser: async (_: unknown, { id, input }: { id: string; input: Record<string, unknown> }) => {
      await connectDb();
      const updatedUser = await Users.findByIdAndUpdate(id, input, { new: true });
      if (!updatedUser) {
        throw new Error("User not found");
      }
      return updatedUser;
    },
    
    deleteUser: async (_: unknown, { id }: { id: string }) => {
      await connectDb();
      const result = await Users.findByIdAndDelete(id);
      return !!result;
    },
  },
};
