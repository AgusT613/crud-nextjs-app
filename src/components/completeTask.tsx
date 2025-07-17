import { setTaskComplete } from "@/app/actions";

export default function CompleteTask({
  taskId,
  taskDone,
}: {
  taskId: number;
  taskDone: boolean;
}) {
  return (
    <form action={setTaskComplete}>
      <input
        type="text"
        hidden
        readOnly
        defaultValue={`${!taskDone}`}
        name="done"
      />
      <input type="text" hidden readOnly defaultValue={taskId} name="id" />
      <button type="submit" className="cursor-pointer">
        {taskDone ? "Rehacer" : "Completar"}
      </button>
    </form>
  );
}
