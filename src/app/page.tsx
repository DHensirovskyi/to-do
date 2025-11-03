import CreateTaskModal from "./modalWindows/CreateTaskModal";
import InviteModal from "./modalWindows/InviteModal";

export default function Home() {
  return (
    <main className="px-18 flex gap-10">
      <InviteModal />
      <CreateTaskModal />
    </main>
  );
}
