import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    priority: { type: String, enum: ["High", "Moderate", "Low", "Extreme"], default: "Moderate" },
    status: { type: String, enum: ["Not Started", "In Progress", "Completed"], default: "Not Started" },
    color: { type: String, default: "#42ADE2" },
    image: { type: String, default: "/tasksDashboard/img1.jpg" },
    createdDate: { type: String, default: () => new Date().toLocaleDateString("de-DE") },
  },
  { timestamps: true }
);

export const Task = mongoose.models.Task || mongoose.model("Task", TaskSchema);