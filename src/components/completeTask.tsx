import { setTaskComplete } from "@/app/actions";
import { Check, Minus } from "@deemlol/next-icons";
import ActionBtn from "./actionBtn";

export default function CompleteTask({
  taskId,
  taskDone,
}: {
  taskId: number;
  taskDone: boolean;
}) {
  return (
    <form action={setTaskComplete} className="flex m-auto">
      <input
        type="text"
        hidden
        readOnly
        defaultValue={`${!taskDone}`}
        name="done"
      />
      <input type="text" hidden readOnly defaultValue={taskId} name="id" />
      <ActionBtn type="submit">
        {taskDone ? <Minus className="size-4" /> : <Check className="size-4" />}
      </ActionBtn>
    </form>
  );
}
